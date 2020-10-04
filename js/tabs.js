    // window.addEventListener('DOMContentLoaded', () => {
    //     const tabs = document.querySelectorAll('.work__tab'),
    //         tabsContent = document.querySelectorAll('.works__image'),
    //         tabsParent = document.querySelector('.work__parant');

    //     function hideTabContent() {
    //         tabsContent.forEach(item => {
    //             item.style.display = 'none';
    //         });

    //         tabs.forEach(item => {
    //             item.classList.remove('work__tab_active');
    //         });
    //     }

    //     function showTabContent(i = 0) {
    //         tabsContent[i].style.display = 'block';
    //         tabs[i].classList.add('work__tab_active');
    //     }

    //     hideTabContent();
    //     showTabContent();

    //     tabsParent.addEventListener('click', (event) => {
    //         const target = event.target;

    //         if (target && target.classList.contains('work__tab')) {
    //             tabs.forEach((item, i) => {
    //                 if (target == item) {
    //                     hideTabContent();
    //                     showTabContent(i);
    //                 }
    //             });
    //         }
    //     });

    // });