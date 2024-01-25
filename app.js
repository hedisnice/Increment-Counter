const counters = document.querySelectorAll(".counter");

const updateCounter = (counter, target, start) => {
  const increment = (target - start) / 50;
  if (start < target) {
    counter.innerText = `${Math.ceil(start + increment)}`;

    // ใช้ setTimeout เพื่อหน่วงเวลาการทำงาน
    setTimeout(() => {
      updateCounter(counter, target, start + increment);
    }, 25);
  } else {
    counter.innerText = target;
  }
};

counters.forEach((counter) => {
  counter.innerText = "0";
  const target = +counter.getAttribute("data-target");
  updateCounter(counter, target, 0);
});
