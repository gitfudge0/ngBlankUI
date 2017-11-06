class BuiDropdownController {
  constructor() {
    this.name = 'buiDropdown';
    this.showDropdown = false;

    this.toggleDropdown = () => {
      this.showDropdown = !this.showDropdown;
    }
  }
}

export default BuiDropdownController;
