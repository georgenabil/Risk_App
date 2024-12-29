sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagmenet/risks/test/integration/FirstJourney',
		'riskmanagmenet/risks/test/integration/pages/RisksList',
		'riskmanagmenet/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagmenet/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);