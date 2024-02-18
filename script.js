
function updateCounter(counterId, targets, interval) {
    let count = 0;
    let targetIndex = 0;
    const counterElement = document.getElementById(counterId);

    function increment() {
        if(count < targets[targetIndex]) {
            count++;
            counterElement.textContent = count + " zł";
            setTimeout(increment, interval);
        } else if (targetIndex < targets.length - 1) {
            targetIndex++;
            setTimeout(increment, interval);
        }
    }

   
    function startCountingWhenVisible() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    increment();
                   
                    observer.unobserve(counterElement);
                }
            });
        }, { threshold: 0.1 }); 

        observer.observe(counterElement);
    }

    startCountingWhenVisible();
}


updateCounter("counter1", [80],10);
updateCounter("counter2", [200], 8);
updateCounter("counter3", [400], 5); 
