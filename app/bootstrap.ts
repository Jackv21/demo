let myWindow : any = window;

class Bootstrap {
    bootstrapApplication() {
        angular.element(document).ready(() => {
            angular.bootstrap(document.body, ['demo']);
        });
    }
}


myWindow.bootstrap = new Bootstrap();