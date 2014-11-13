// abdonationforms.js
// dependency: easyab library
// this is to test multi vs single forms

  $(document).ready(function() {
    $('#ab-donate-button').attr('href', 'https://secure2.convio.net/adl/site/SPageNavigator/donation-api/donation_form_single_main_1.html&myParam=AB_donate&mySubParam=single');
    $('#ab-donate-button').easyab({
    'slot': 2,
    'scope': 2,
    'name': 'MULTI-SINGLE-DONATE-FORMS',
    'default-vlaue': 'single form',
    'alternatives': [{
      'value':'multi form',
      'alternative': function($this) {
          $this.attr('href', 'https://secure2.convio.net/adl/site/SPageNavigator/donation-api/donation_form_multi_main_1.html&myParam=AB_donate&mySubParam=multi');
            }
        }]
    });
  });
