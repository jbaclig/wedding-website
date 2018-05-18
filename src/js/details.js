document.addEventListener('DOMContentLoaded', () => {
    var detailsContext, ceremonyContext, receptionContext;

    detailsContext = {
        pageClass: 'details',
        displayTitle: 'Details',
    };

    ceremonyContext = {
        eventName: 'Ceremony',
        eventTime: '2:00PM',
        locationName: 'Our Lady of The Rosary',
        addressLine1: '1629 Colombia St.',
        addressLine2: 'San Diego, CA 92101',
        mapLink: 
            'https://www.google.com/maps/place/Our+Lady+of+the+Rosary+Church/' +
            '@32.7223574,-117.1672064,15z/data=!4m2!3m1!1s0x0:0x7bba2ed60c2740f6?' +
            'sa=X&ved=2ahUKEwih14Xrw47bAhVopVkKHWSMBWcQ_BIwCnoFCAEQ3gE',
        description:
            'The traditional Catholic wedding is enhanced in Filipino culture ' +
            'by several traditions. Ceremonial sponsors or godparents are ' +
            'chosen by the betrothed as role models for their future married ' +
            'life and participate in the procession with the bridal party. Two' +
            ' separate candles are lit at the beginning of the ceremony, which' +
            ' the bride and groom then join into a single flame signifying the ' +
            'union of their two families. A veil is placed over the shoulders' +
            ' of the bride and groom during the ceremony, demonstrating the' +
            ' clothing of two individuals as one. A cord is then looped in a ' +
            'figure 8 and placed over the heads of the bride and group to ' +
            'signify everlasting fidelity.',
        details1: 'Limited self-parking available.',
    }

    receptionContext = {
        eventName: 'Reception',
        eventTime: '6:00PM',
        locationName: 'BRICK',
        addressLine1: '2863 Historic Dicatur Rd.',
        addressLine2: 'San Diego, CA 92106',
        mapLink: 
            'https://www.google.com/maps/place/BRICK/@32.7403836,-117.2102422,' +
            '15z/data=!4m5!3m4!1s0x0:0x3afe07d4a1968614!8m2!3d32.7403836!4d-' +
            '117.2102422',
        description:
            'Please join us to celebrate with a night of dinner, dancing, and ' +
            'fun!  The night will begin with a Cocktail Hour from 5:30-6:30PM ' +
            'followed by dinner at 7:00PM.',
        details1: 
            `Looking for a place to stay?  How about things to do between the 
            ceremony and reception? Check out our `,
        detailsLink: '<a href="guide.html">City Guide</a>',
        details2: 
            ' for some suggestions!'
    }

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(detailsContext);
    document.getElementById('ceremony-details').innerHTML = 
        MyApp.templates.details(ceremonyContext);
    document.getElementById('reception-details').innerHTML = 
        MyApp.templates.details(receptionContext);

});