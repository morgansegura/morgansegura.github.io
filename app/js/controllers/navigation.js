function NavCtrl() {

    // ViewModel
    const vm = this;
    vm.navLinks = [{
        Title: 'home',
        LinkText: 'Home',
    }, {
        Title: 'about',
        LinkText: 'About Us'
    }, {
        Title: 'bloc',
        LinkText: 'Blog'
    }];

    vm.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}

export default {
    name: 'NavCtrl',
    fn: NavCtrl
};
