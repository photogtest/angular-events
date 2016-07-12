AngularJS Events
================

Summary
----------
You will be creating an event manager application which allows users to add and remove events from a calendar. Once an event is entered into the calendar, it should be listed along with the date it was added, the event price, and the name of the event. There should be a field displaying the sum of event prices for all scheduled events in the calendar. There will be a responsive header with three menu items: Home (The calendar list view), Reset (clear all calendar events), and Add Event (the form to create new events).

Instructions
------------
1. Choose a base currency and display it next to each event entry and the total event prices field.
2. For the currency symbol next to the total you should use a font­awesome[1] icon.
3. The javascript logic should be built on AngularJS 1.5.x.
4. At least one AngularJS directive should be used.
5. The input’s to add/remove events should have validation and use Bootstrap Alerts for reporting.
6. The event calendar data should persist on a page refresh for the same user until they click “Reset” in the menu. It is up to the developer to choose persistence method.
7. The code should be hosted in a Git repository, ideally we would like to see how you got to the end result via a series of commits as opposed to one large commit. If you need a branch to commit to we can provide one for you.
8. The header should have horizontal navigation on large screen devices and collapse on mobile devices into a responsive menu. As an example of the layout and resize behaviour, view the font­awesome website in your browser and resize the window to view the menu collapse effect.
9. The event calendar price total can never contain a negative amount.
10. There is no limit to the amount of events that can be added or removed in the calendar.
11. The Home view should have pagination once the calendar exceeds 10 entries.
