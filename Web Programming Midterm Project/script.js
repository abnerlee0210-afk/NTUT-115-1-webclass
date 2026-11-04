
/* ========================================
   University Survival Guide
   JavaScript Interactive Features
======================================== */


/* ========================================
   1. Course Filter
   Page: courses.html
======================================== */

// Get all filter buttons and course cards
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");
const filterResult = document.getElementById("filter-result");

// Check whether the course filter exists on this page
if (filterButtons.length > 0 && filterResult !== null) {

    // Add a click event to each filter button
    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Get the selected category
            const selectedCategory = button.dataset.filter;

            // Update the active button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Count visible courses
            let visibleCount = 0;

            // Check each course card
            courseCards.forEach(function (card) {

                const courseCategory = card.dataset.category;

                // Show all or matching courses
                if (
                    selectedCategory === "all" ||
                    selectedCategory === courseCategory
                ) {

                    card.classList.remove("hidden");
                    visibleCount++;

                } else {

                    card.classList.add("hidden");

                }

            });

            // Update the result message
            if (selectedCategory === "all") {

                filterResult.textContent =
                    "目前顯示全部 " + visibleCount + " 門課程。";

            } else {

                filterResult.textContent =
                    "目前顯示 " + visibleCount + " 門符合條件的課程。";

            }

        });

    });

}


/* ========================================
   2. Study Time Calculator
   Page: planner.html
======================================== */

// Get form and result elements
const studyForm = document.getElementById("study-form");
const studyHours = document.getElementById("study-hours");
const studyDays = document.getElementById("study-days");
const resultMessage = document.getElementById("result-message");
const resultHours = document.getElementById("result-hours");

// Check whether the calculator exists on this page
if (studyForm !== null) {

    // Handle form submission
    studyForm.addEventListener("submit", function (event) {

        // Prevent page reload
        event.preventDefault();

        // Read user input
        const hours = Number(studyHours.value);
        const days = Number(studyDays.value);

        // Validate input
        if (
            studyHours.value === "" ||
            studyDays.value === "" ||
            !Number.isFinite(hours) ||
            hours < 0.5 ||
            hours > 24 ||
            !Number.isInteger(hours * 2) ||
            !Number.isInteger(days) ||
            days < 1 ||
            days > 7
        ) {

            resultMessage.textContent =
                "請輸入有效的讀書時數與天數。";

            resultHours.textContent = "";

            return;

        }

        // Calculate total study hours
        const totalHours = hours * days;

        // Display result
        resultMessage.textContent =
            "每天讀書 " + hours +
            " 小時，每週讀書 " + days + " 天。";

        resultHours.textContent =
            "每週預計學習 " + totalHours + " 小時";

    });

    // Handle reset button
    studyForm.addEventListener("reset", function () {

        resultMessage.textContent =
            "請輸入資料後按下計算按鈕。";

        resultHours.textContent = "";

    });

}
