class WorkoutView {
    constructor() {
        this.workoutForm = document.getElementById('workout-form');
        this.sportTypeInput = document.getElementById('sport-type');
        this.durationInput = document.getElementById('duration');
        this.intensityInput = document.getElementById('intensity');
        this.dateInput = document.getElementById('date');

        this.filterSportInput = document.getElementById('filter-sport');
        this.filterDateInput = document.getElementById('filter-date');

        this.workoutList = document.getElementById('workout-list');
        this.totalCount = document.getElementById('total-count');
    }

    bindAddWorkout(handler) {
        this.workoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newWorkout = {
                sportType: this.sportTypeInput.value,
                duration: this.durationInput.value,
                intensity: this.intensityInput.value,
                date: this.dateInput.value,
            };
            handler(newWorkout);
            this.workoutForm.reset();
        });
    }

    bindRemoveWorkout(handler) {
        this.workoutList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const index = e.target.dataset.index;
                handler(index);
            }
        });
    }

    bindFilters(handler) {
        this.filterSportInput.addEventListener('input', () => handler());
        this.filterDateInput.addEventListener('input', () => handler());
    }

    displayWorkouts(workouts, totalCount) {
        this.workoutList.innerHTML = '';
        workouts.forEach((workout, index) => {
            const workoutItem = document.createElement('li');
            workoutItem.className = 'workout-item';
            workoutItem.innerHTML = `
                ${workout.sportType} | ${workout.duration} мин | ${workout.intensity} | ${workout.date}
                <button class="delete-btn" data-index="${index}">Удалить</button>
            `;
            this.workoutList.appendChild(workoutItem);
        });
        this.totalCount.textContent = totalCount;
    }
}
