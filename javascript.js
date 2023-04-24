// old one

// const hamMenu=document.querySelector('.hamburger-icon');
// const offScreenMenu=document.querySelector('.off-screen-menu');

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// });

// updated one

const hamMenu = document.querySelector('.hamburger-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuItems = offScreenMenu.querySelectorAll('.menu-item');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  });
});


document.addEventListener('keyup', (e)=>{
    navigator.clipboard.writeText('');
    alert('Screenshot Disabled');
});


// // Toggle switch of gallery views
// $(document).ready(function() {
//     $('.F_Toggle_button').click(function() {
//       // Toggle active class on button
//       $('.F_Toggle_button').removeClass('active');
//       $(this).addClass('active');
  
//       // Toggle active class on view
//       var view = $(this).data('view');
//       $('.F_Gallery_view, .F_Carousel_view').removeClass('active');
//       $('.F_' + view + '_view').addClass('active');
//     });
//   });
  
