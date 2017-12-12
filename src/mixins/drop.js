export default {
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick);
  },
  methods: {
    onClick(e) {
      this.dropdownMenu = e.target.nextElementSibling;
      // check if sibling exists
      if (this.dropdownMenu) {
        // check if sibling is dropdown-menu
        if (this.dropdownMenu.classList.contains('d-none')) {
          // close other dropdown-menus
          this.otherDropdownMenu = document.querySelector('.dropdown-menu.d-block');
          if (this.otherDropdownMenu) {
            this.otherDropdownMenu.classList.remove('d-block', 'd-fade-in');
            this.otherDropdownMenu.classList.add('d-none');
          }
          this.dropdownShow();
        } else if (this.dropdownMenu.classList.contains('d-block')) {
          this.dropdownHide();
        } else {
          this.otherDropdownClose();
        }
      } else {
        this.otherDropdownClose();
      }
    },
    dropdownShow() {
      this.dropdownMenu.classList.remove('d-none');
      this.dropdownMenu.classList.add('d-block', 'd-fade-in');
    },
    dropdownHide() {
      this.dropdownMenu.classList.remove('d-block', 'd-fade-in');
      this.dropdownMenu.classList.add('d-none');
    },
    otherDropdownClose() {
      this.dropdownMenu = document.querySelector('.dropdown-menu.d-block');
      if (this.dropdownMenu) {
        this.dropdownHide();
      }
    }
  }
};
