document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Toggle active class on the item
            item.classList.toggle('active');

            // Toggle display of the answer
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '15px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 15px';
            }
        });
    });
});
