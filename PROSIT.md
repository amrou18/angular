# Prosit – Service and dependency injection (Angular 21)

## Central question
**How does the implementation of dedicated services and the Dependency Injection system centralize the management of a conference catalog and synchronize the status of reservations across the entire application?**

## 1. Architectural limitations of the old code
- **Coupling**: catalog retrieval, topic filtering and booking logic lived inside `ConferenceListComponent`; the view owned the data.
- **Code duplication**: the filtering logic was copied into `NavbarComponent` just to count bookings.
- **No synchronization**: `new ConferenceListComponent()` creates a second, unrelated instance outside Angular's injector, so the navbar and the catalog each had their own booking state.
- **Untestable**: manual instantiation bypasses DI, so dependencies cannot be mocked and unit tests fail.
- **Violates the Single Responsibility Principle**: one class displays, fetches, filters and books.

## 2. Service structure
| Service | Responsibility | State (signals) |
|---|---|---|
| `ConferenceService` | Catalog: data, topic filter, derived list | `conferences`, `selectedTopic`, `topics` (computed), `filteredConferences` (computed) |
| `BookingService` | Reservations only | `bookedIds`, `bookedCount` (computed), `bookedConferences` (computed) |

`BookingService` injects `ConferenceService` with `inject()` to build the personalized program (`bookedConferences`). Dependency goes one way only: booking → catalog.

Writable signals are private; services expose `asReadonly()` views and mutate state only through methods (`filterByTopic`, `toggleBooking`).

## 3. Injection scope: `providedIn: 'root'` vs `providers: [...]`
- `providedIn: 'root'` creates **one singleton** for the whole app. Navbar, catalog and details all inject the same `BookingService`, so they read the same signal and stay synchronized. It is also tree-shakable.
- `providers: [BookingService]` on a component creates **one instance per component (and its children)**. The navbar and the catalog would again hold separate booking state, which is exactly the bug to fix.
- Component-level providers are only appropriate for state that must be isolated per component instance (e.g. a form wizard).

Choice here: both services are `providedIn: 'root'`.

## 4. Refactored solution
- `ConferanceList` (catalog) and `ConferanceDetails` only call `inject(...)` and render service signals.
- `Navbar` (shown through `Header`) reads `bookingService.bookedCount()`; clicking **Réserver** in the catalog updates the navbar instantly through the shared signal, with no manual wiring.
- No component contains data or business logic.

## Run
```bash
npm install
ng serve     # http://localhost:4200
ng test
```
