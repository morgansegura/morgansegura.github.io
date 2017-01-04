function GalleryController() {

    // ViewModel
    const vm = this;

    vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    vm.number = 1234;
    vm.galleries = [
        {
            'id': 0,
            'title': 'I wonder who had the best day today? Oh happy day.',
            'prettyTitle': 'Oh Happy Day',
            'imageCropped': '../../images/octo.png',
            'image': '../../images/octo.png',
            'description': 'Turnip greens yarrow rice bean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDecription': 'Learn all about turnips',
            'timestamp': '11/17/17'
        }
    ];
}

export default {
    name: 'GalleryController',
    fn: GalleryController
};
