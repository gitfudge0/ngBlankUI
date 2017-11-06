class HomeController {
  constructor() {
    this.name = 'home';
    this.somevalue = 0;

    this.display = () => {
      console.log("Hello World")
    }

    this.list = [
      {
        'item': 'Hello World',
        'function': this.display
      }
    ]
  }
}

export default HomeController;
