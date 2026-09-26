# FitLog - Workout Library

FitLog is a workout library and workout planning website.
Here users can browse different workouts, see workout details, add workouts to today's plan and save workouts for later.

I built this project using Next.js and TypeScript.

## Live Link: https://assignment-6-module-37-fit-log.vercel.app


## GitHub Repository: https://github.com/ronithussain/assignment-6-module-37-fit-log.git

## Technologies I Used

* Next.js
* TypeScript
* React
* Tailwind CSS
* DaisyUI
* Context API
* REST API

---

## Main Features

### 1. Workout Library

* Shows workout data from API.
* Workout cards show image, category, equipment, duration, calories and rating.
* Clicking a workout takes the user to the workout details page.
* Loading state is shown while the data is loading.

### 2. Workout Details

From the details page users can see:

* Workout name
* Description
* Category
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Instructions

There are also two buttons:

* Add to today's plan
* Save for later

### 3. My Plan

The My Plan page contains two tabs:

* Today's Plan
* Saved

I used DaisyUI tabs and React state to control the active tab.

Users can:

* View workout details
* Remove a workout
* Mark a workout as done

### 4. Dynamic Statistics

The My Plan page shows:

* Exercises
* Minutes
* Calories

These values are calculated from the workouts added to today's plan.

When a workout is removed, the total values are also updated.

### 5. Sort Workout

I added a Sort By option with:

* Duration
* Calories
* Rating

The workout list changes according to the selected option.

---

## Some Other Features

* Responsive design for mobile, tablet and desktop.
* Active navbar link.
* Plan and Saved counters in navbar.
* Toast notification for different actions.
* Custom 404 page.
* Reusable components.
* Dynamic workout details route.
* TypeScript types for workout data.


## Project Learning

While building this project I practiced:

* Next.js App Router
* Dynamic routes
* Server and Client Components
* Data fetching
* React Context API
* State management
* Props and reusable components
* TypeScript
* Tailwind CSS
* DaisyUI
* Sorting
* Responsive design

This project helped me understand how different Next.js and React concepts work together in a real project.


