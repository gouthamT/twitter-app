class ModalService {
  constructor() {
    this.isModalActive = false;
    this.modalFactoryReference = null;
  }
  init(modalFactoryReference) {
    this.modalFactoryReference = modalFactoryReference;
  }
  show(component, props) {
    if (component)
      this.modalFactoryReference.show(component, props);
  }
  hide() {
    this.modalFactoryReference.hide();
  }
}

var modalService = new ModalService();
export default modalService;