const utilities = require("@/utilities");

const views = [
  {
    path: "/",
    component: require("./views/Home.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Overview.vue"),
    component: require("./views/Overview.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Contact.vue"),
    component: require("./views/Contact.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/News.vue"),
    component: require("./views/News.vue")
  },

  {
    path: utilities.componentToRouterPath("./views/GrantInformation.vue"),
    component: require("./views/GrantInformation.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Documents.vue"),
    component: require("./views/Documents.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Webinars.vue"),
    component: require("./views/Webinars.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Faqs.vue"),
    component: require("./views/Faqs.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/news/CatalogOfStateFinancialAssistance.vue"
    ),
    component: require("./views/news/CatalogOfStateFinancialAssistance.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/Grants.vue"),
    component: require("./views/Grants.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/NofoVocaLegalAssist.vue"
    ),
    component: require("./views/grants/NofoVocaLegalAssist.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/JagComprehensiveResponse.vue"
    ),
    component: require("./views/grants/JagComprehensiveResponse.vue")
  },

  {
    path: utilities.componentToRouterPath("./views/grants/201704RsatNofo.vue"),
    component: require("./views/grants/201704RsatNofo.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20170427VocaSA.vue"),
    component: require("./views/grants/20170427VocaSA.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170427VocaCACI.vue"
    ),
    component: require("./views/grants/20170427VocaCACI.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20170427VocaDV.vue"),
    component: require("./views/grants/20170427VocaDV.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170602UnmetNeeds.vue"
    ),
    component: require("./views/grants/20170602UnmetNeeds.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170620CommunityViolence.vue"
    ),
    component: require("./views/grants/20170620CommunityViolence.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170819ViolenceInterventionAndPrevention.vue"
    ),
    component: require("./views/grants/20170819ViolenceInterventionAndPrevention.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170824VOCAcourts.vue"
    ),
    component: require("./views/grants/20170824VOCAcourts.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20170913ARISFY18.vue"
    ),
    component: require("./views/grants/20170913ARISFY18.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20171031TRC.vue"),
    component: require("./views/grants/20171031TRC.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20171102SORNA.vue"),
    component: require("./views/grants/20171102SORNA.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180205LeadEntityCAC.vue"
    ),
    component: require("./views/grants/20180205LeadEntityCAC.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180205LeadEntityDV.vue"
    ),
    component: require("./views/grants/20180205LeadEntityDV.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180205LeadEntitySA.vue"
    ),
    component: require("./views/grants/20180205LeadEntitySA.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180227JAGoperations.vue"
    ),
    component: require("./views/grants/20180227JAGoperations.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180608VOCAHotline.vue"
    ),
    component: require("./views/grants/20180608VOCAHotline.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180705ARIimplementation.vue"
    ),
    component: require("./views/grants/20180705ARIimplementation.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180821VAWAMulti.vue"
    ),
    component: require("./views/grants/20180821VAWAMulti.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20180911CLEP.vue"),
    component: require("./views/grants/20180911CLEP.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20180927ARIPlanning.vue"
    ),
    component: require("./views/grants/20180927ARIPlanning.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20181102rsatmat.vue"),
    component: require("./views/grants/20181102rsatmat.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20190111DPAservicesNOFO.vue"
    ),
    component: require("./views/grants/20190111DPAservicesNOFO.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20190115ResponsiveSchools.vue"
    ),
    component: require("./views/grants/20190115ResponsiveSchools.vue")
  },
  {
    path: utilities.componentToRouterPath(
      "./views/grants/20190129lawEnforcement.vue"
    ),
    component: require("./views/grants/20190129lawEnforcement.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20190129CACI.vue"),
    component: require("./views/grants/20190129CACI.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20190129ICADV.vue"),
    component: require("./views/grants/20190129ICADV.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20190129ICASA.vue"),
    component: require("./views/grants/20190129ICASA.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20190306ifvcc.vue"),
    component: require("./views/grants/20190306ifvcc.vue")
  },
  {
    path: utilities.componentToRouterPath("./views/grants/20190329vawa.vue"),
    component: require("./views/grants/20190329vawa.vue")
  }
  
];

export default utilities.generateRoutes(views);
