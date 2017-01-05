function ProjectCtrl() {

    // ViewModel
    const vm = this;

    vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    vm.number = 1234;
    vm.galleries = [
        {
            'title': 'I wonder who had the best day today? Oh happy day.',
            'prettyTitle': 'Oh Happy Day',
            'imageCropped': '/images/octo.png',
            'image': '/images/octo.png',
            'desc': 'Turnip greens yarrow rice bean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Learn all about turnips',
            'timestamp': '11/17/17'
        },
        {
            'title': 'Pretty Girl, mysterious',
            'prettyTitle': 'Pretty Girl, mysterious',
            'imageCropped': '/images/posh.png',
            'image': '/images/posh.png',
            'desc': 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Celery potato scallion desert spinach carrot soko',
            'timestamp': '10/29/17'
        },
        {
            'title': 'I wonder who had the best day today? Oh happy day.',
            'prettyTitle': 'Oh Happy Day',
            'imageCropped': '/images/bluebird.png',
            'image': '/images/bluebird.png',
            'desc': 'Turnip greens yarrow rice bean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Bamboo shoot green bean swiss',
            'timestamp': '11/17/17'
        },
        {
            'title': 'Pretty Girl, mysterious',
            'prettyTitle': 'Pretty Girl, mysterious',
            'imageCropped': '/images/futbol.png',
            'image': '/images/futbol.png',
            'desc': 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Potato horseradish spinach carrot soko',
            'timestamp': '10/29/17'
        },
        {
            'title': 'I wonder who had the best day today? Oh happy day.',
            'prettyTitle': 'Oh Happy Day',
            'imageCropped': '/images/theman.png',
            'image': '/images/theman.png',
            'desc': 'Turnip greens yarrow rice bean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Learn all about turnips',
            'timestamp': '11/17/17'
        },
        {
            'title': 'Pretty Girl, mysterious',
            'prettyTitle': 'Pretty Girl, mysterious',
            'imageCropped': '/images/mow.png',
            'image': '/images/mow.png',
            'desc': 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Horseradish spinach carrot soko',
            'timestamp': '10/29/17'
        },
        {
            'title': 'Pretty Girl, mysterious',
            'prettyTitle': 'Pretty Girl, mysterious',
            'imageCropped': '/images/fox.png',
            'image': '/images/fox.png',
            'desc': 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Potato horseradish spinach carrot soko',
            'timestamp': '10/29/17'
        },
        {
            'title': 'I wonder who had the best day today? Oh happy day.',
            'prettyTitle': 'Oh Happy Day',
            'imageCropped': '/images/balloons.png',
            'image': '/images/balloons.png',
            'desc': 'Turnip greens yarrow rice bean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Learn all about turnips',
            'timestamp': '11/17/17'
        },
        {
            'title': 'Pretty Girl, mysterious',
            'prettyTitle': 'Pretty Girl, mysterious',
            'imageCropped': '/images/lion.png',
            'image': '/images/lion.png',
            'desc': 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
            'prettyDesc': 'Horseradish spinach carrot soko',
            'timestamp': '10/29/17'
        }
    ];
}

export default {
    name: 'ProjectCtrl',
    fn: ProjectCtrl
};
