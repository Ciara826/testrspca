var donationItems = (function() {
  'use strict';

  var donations = [
    {
      "firstName":"Bill",
      "lastName":"Cash",
      "donationAmount": 10.75,
      "donationTime": new Date(new Date().setHours(new Date().getHours() - 3))
    },
    {
      "firstName":"Terri",
      "lastName":"Dosh",
      "donationAmount": 15.00,
      "donationTime": new Date(new Date().setHours(new Date().getHours() - 2))
    },
    {
      "firstName":"Arthur",
      "lastName":"Dough",
      "donationAmount": 20.50,
      "donationTime": new Date(new Date().setMinutes(new Date().getMinutes() - 30))
    }
	{
      "firstName":"Susan",
      "lastName":"Moolah",
      "donationAmount": 5.25,
      "donationTime": new Date(new Date().setMinutes(new Date().getMinutes() - 30))
    }
  ];

  var currentItem = 0;

  function getNextDonation() {
    let donation = null;
    if (currentItem < donations.length) {
      donation = donations[currentItem]
      currentItem++
    }

    return donation;
  }