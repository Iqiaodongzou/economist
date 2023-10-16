import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    templateData:{
      "props": {
        "pageProps": {
          "readerId": "",
          "contactId": "",
          "pageUrl": "https://www.economist.com",
          "domain": "https://www.economist.com",
          "auth": {
            "loggedIn": false,
            "verified": false,
            "isAnonymous": true,
            "isSubscriber": false,
            "bulkSubscriber": false,
            "userType": "anonymous"
          },
          "storyCollection": {
            "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
            "type": [
              "WebPage",
              "CollectionPage"
            ],
            "hasPart": {
              "total": 11,
              "parts": [
                {
                  "id": "/content/grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "New home page - Discover rail",
                  "tegID": "grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 3,
                    "parts": [
                      {
                        "url": {
                          "canonical": "https://subscriberevents.economist.com/events/israel-and-gaza-the-attacks-politics-and-implications-discoverrail/",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": null,
                        "headline": "Subscriber webinar",
                        "subheadline": "",
                        "datePublished": "",
                        "description": "Our editors will discuss Israel and Gaza at 5:30pm BST on October 12th",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/sites/default/files/webinars.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1251,
                            "height": 1251
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": null,
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "utu9ftti2851agv72jd2qvdbmc0hmi4a",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "tegID": "grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "context": {
                              "headline": "Subscriber webinar",
                              "subheadline": "",
                              "description": "Our editors will discuss Israel and Gaza at 5:30pm BST on October 12th",
                              "image": {
                                "main": {
                                  "url": {
                                    "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/sites/default/files/webinars.png",
                                    "__typename": "URL"
                                  },
                                  "__typename": "Content",
                                  "width": 1251,
                                  "height": 1251
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Subscriber webinar",
                          "description": "Our editors will discuss Israel and Gaza at 5:30pm BST on October 12th"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts/2023/10/12/what-will-a-successful-ground-invasion-look-like-for-israel",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "SocialMediaPosting",
                          "BlogPosting",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "What will a successful ground invasion look like for Israel?",
                        "subheadline": "The Intelligence",
                        "datePublished": "2023-10-12T10:46:10Z",
                        "description": "Also on the daily podcast: Australian referendum and Birken-stocks",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_PDP507.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": null,
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "26:32",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "Podcasts",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "omi23dr8h15h8c33t2gkb2cju8ap758o"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "dte91cbim4o0cbbchf2pj4uk9na0fmtc",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/k8cbnn97oiushr5av7h38tkk4oa6jh4g",
                            "tegID": "k8cbnn97oiushr5av7h38tkk4oa6jh4g",
                            "context": {
                              "headline": "What will a successful ground invasion look like for Israel?",
                              "subheadline": "Oct 12th 2023",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "tegID": "grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "context": {
                              "headline": "The Intelligence",
                              "subheadline": "",
                              "description": "Today’s podcast: What will a successful ground invasion look like for Israel?",
                              "image": {
                                "main": {
                                  "url": {
                                    "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/sites/default/files/namethe_intelligence.png",
                                    "__typename": "URL"
                                  },
                                  "__typename": "Content",
                                  "width": 448,
                                  "height": 448
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/ahdtjvqu5o6jlremajcmescv1u590bvt",
                            "tegID": "ahdtjvqu5o6jlremajcmescv1u590bvt",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The Intelligence",
                          "description": "Today’s podcast: What will a successful ground invasion look like for Israel?"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/military-terms-a-to-z",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": null,
                        "headline": "The A to Z of military terms",
                        "subheadline": "",
                        "datePublished": "",
                        "description": "Modern warfare explained to you in plain English",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/sites/default/files/mt_icon_temp.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 300,
                            "height": 300
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": null,
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "7csgdss4ibsr6md9fpdu1aovgbd444em",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "tegID": "grcm3fmmp4aa1ek9dg0ed07hkri6ajt2",
                            "context": {
                              "headline": "The A to Z of military terms",
                              "subheadline": "",
                              "description": "Modern warfare explained to you in plain English",
                              "image": {
                                "main": {
                                  "url": {
                                    "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/sites/default/files/mt_icon_temp.png",
                                    "__typename": "URL"
                                  },
                                  "__typename": "Content",
                                  "width": 300,
                                  "height": 300
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The A to Z of military terms",
                          "description": "Modern warfare explained to you in plain English"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "New home page - The Economist today",
                  "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 7,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/10/12/will-israels-agony-and-retribution-end-in-chaos-or-stability",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Will Israel’s agony and retribution end in chaos or stability?",
                        "subheadline": "The Middle East",
                        "datePublished": "2023-10-12T09:34:25Z",
                        "description": "Much depends on its offensive in Gaza—and its politicians and neighbours",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_LDD001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Leaders",
                              "tegID": "0eqdc3kshoq96naup34ruco7pktc6n51"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:31",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "e7l1nfpqpicsd2mc77e7ii58m8qca8cn",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "tegID": "3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Will Israel’s agony and retribution end in chaos or stability?",
                          "description": "Much depends on its offensive in Gaza—and its politicians and neighbours"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/12/hamass-atrocities-and-israels-retaliation-will-change-both-sides-for-ever",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Hamas’s atrocities and Israel’s retaliation will change both sides for ever",
                        "subheadline": "From shock to fury",
                        "datePublished": "2023-10-12T10:28:19Z",
                        "description": "The miscalculations of Israel’s and Gaza’s leaders are being laid bare",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_FBP001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Briefing",
                              "tegID": "ig92fd080i1j2q35gel3sev1e8r72j9r"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "22:05",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "j3vtaf9f098u4n7jtcbvjrnrk61lurgg",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "tegID": "3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Hamas’s atrocities and Israel’s retaliation will change both sides for ever",
                          "description": "The miscalculations of Israel’s and Gaza’s leaders are being laid bare"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/12/hamas-has-failed-to-rally-the-middle-east-to-its-cause",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Hamas has failed to rally the Middle East to its cause",
                        "subheadline": "Resisting the call, for now",
                        "datePublished": "2023-10-12T10:15:23Z",
                        "description": "But it has managed to demolish America’s plans for the region",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_FBP004.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Briefing",
                              "tegID": "ig92fd080i1j2q35gel3sev1e8r72j9r"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "13:34",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "qj8bss66cemnue1fg97t246smbc9ibms",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "tegID": "3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Hamas has failed to rally the Middle East to its cause",
                          "description": "But it has managed to demolish America’s plans for the region"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/2023/10/12/paralysis-in-congress-makes-america-a-dysfunctional-superpower",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Paralysis in Congress makes America a dysfunctional superpower",
                        "subheadline": "The home and foreign fronts",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "Wars in Ukraine and Israel, and the risk of one over Taiwan, test American staying power",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_USP005.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "United States",
                              "tegID": "h4j4itd8schld2m55dnrjg1ro8nlttoc"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "10:40",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "nt296k4o8fsnuc9tfknkt1o3rna9nhf5",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/o8c88qtphjltah4ti2h6gbt0grffe1am",
                            "tegID": "o8c88qtphjltah4ti2h6gbt0grffe1am",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Paralysis in Congress makes America a dysfunctional superpower",
                          "description": "Wars in Ukraine and Israel, and the risk of one over Taiwan, test American staying power"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/2023/10/05/so-long-iphone-generative-ai-needs-a-new-device",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "So long iPhone. Generative AI needs a new device",
                        "subheadline": "Schumpeter",
                        "datePublished": "2023-10-05T12:47:55Z",
                        "description": "Is this the twilight of the screen age?",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_WBD000.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Business",
                              "tegID": "79244csej12lltat5mgqtckdp41aagcj"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "7:58",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "c94lh5bc3u3ega76jbohe6thuilhnnbo"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "tojv0hev5spkhd7ftfak48vr6c18iodm"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "idndovcvf7l7vfi1709s4ri4ofpfahmv"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j2o6819ri83cq424ue6dtle6baivkv33"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "7pdh11df2vsfr4rakplq70u6aj6aqv1j"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "vbh3d90anttp8os45sqghtq3dmhcesdf"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "i8b0r1crg2h4no736mda7qqr5tep9ukp"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "fhr9icq2av90u2hle5bpjgacs324bc96"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "tp8gro36s363qc7i0mhm1jb8fharh33q",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/0brpu14r3sudkt2h0d3vm9iehvnhjs99",
                            "tegID": "0brpu14r3sudkt2h0d3vm9iehvnhjs99",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/5v9rnqj9bkpo49ff2mnkcji2sukl7fro",
                            "tegID": "5v9rnqj9bkpo49ff2mnkcji2sukl7fro",
                            "context": {
                              "headline": "",
                              "subheadline": "Schumpeter",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "Schumpeter: So long iPhone. Generative AI needs a new device",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Schumpeter: So long iPhone. Generative AI needs a new device",
                          "description": "Is this the twilight of the screen age?"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/10/12/large-parts-of-asia-are-getting-old-before-they-get-rich",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Large parts of Asia are getting old before they get rich",
                        "subheadline": "Demography",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "Even poor countries must start planning for an ageing population",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_LDP501.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Leaders",
                              "tegID": "0eqdc3kshoq96naup34ruco7pktc6n51"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "6:03",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "5r4vhvvvh8kfolm32l1s141nrf415prm",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Large parts of Asia are getting old before they get rich",
                          "description": "Even poor countries must start planning for an ageing population"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/culture/2023/10/12/david-beckhams-guide-to-celebrity",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "David Beckham’s guide to celebrity",
                        "subheadline": "Back Story",
                        "datePublished": "2023-10-12T16:43:12Z",
                        "description": "As a new series on Netflix shows, it takes more than just a pretty face",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_CUP504.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/culture/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Culture",
                              "tegID": "rvj2s19g2lkbek4tevm6sn1va1se84sl"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "69ethuseufucidu7ip51o76c0n8choc9",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/i4micjl4tuch4n7ilv8ogoa2ei77rn01",
                            "tegID": "i4micjl4tuch4n7ilv8ogoa2ei77rn01",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "tegID": "8kv7d1oll6lp06la5989rk5npk2tv56l",
                            "context": {
                              "headline": "Back Story: David Beckham’s guide to celebrity",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Back Story: David Beckham’s guide to celebrity",
                          "description": "As a new series on Netflix shows, it takes more than just a pretty face"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/gt902o79uji2hob3ckokp99b7mtvr7ml",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "This week",
                  "tegID": "gt902o79uji2hob3ckokp99b7mtvr7ml",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/2023/10/12/politics",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Politics",
                        "subheadline": "The world this week",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WWP004.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "The world this week",
                              "tegID": "t7k3hnfcdgka3o3cer33n8oaipiqit5u"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:09",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "suii7bauc2q2lrsq02ecc4hb1blj6rpn",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "tegID": "gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "context": {
                              "headline": "The most important political stories this week",
                              "subheadline": "",
                              "description": "War between Israel and Hamas, Zelensky visits NATO—and more",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The most important political stories this week",
                          "description": "War between Israel and Hamas, Zelensky visits NATO—and more"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/2023/10/12/business",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Business",
                        "subheadline": "The world this week",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WWP501.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "The world this week",
                              "tegID": "t7k3hnfcdgka3o3cer33n8oaipiqit5u"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "4:55",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "e8e1ebpdacga1u3r1rqrmbcg7lvid161",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "tegID": "gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "context": {
                              "headline": "The most important stories in the business world this week",
                              "subheadline": "",
                              "description": "ExxonMobil agrees to pay $60bn for Pioneer, the IMF downgrades its forecasts for the world economy—and more",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The most important stories in the business world this week",
                          "description": "ExxonMobil agrees to pay $60bn for Pioneer, the IMF downgrades its forecasts for the world economy—and more"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/letters/2023/10/12/letters-to-the-editor",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Letters to the editor",
                        "subheadline": "On making movies, Frank Sinatra, HIV and PrEP, companies, diamonds, Mexican slang",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "A selection of correspondence",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230930_WBP001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/letters/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Letters",
                              "tegID": "trkdsp1g40t56londn8gqi686s2p21vb"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:41",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "pqd5nqe5bp64m1s127m202s2jvnce590",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "tegID": "gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "On making movies, Frank Sinatra, HIV and PrEP, companies, diamonds, Mexican slang",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Letters to the editor",
                          "description": "On making movies, Frank Sinatra, HIV and PrEP, companies, diamonds, Mexican slang"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/2023/10/12/kals-cartoon",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "KAL’s cartoon",
                        "subheadline": "The world this week",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WWD000.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 880
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-world-this-week/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "The world this week",
                              "tegID": "t7k3hnfcdgka3o3cer33n8oaipiqit5u"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "lbi0pd80fk5a2m70jaj4q446ib5d8bi1",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "tegID": "gt902o79uji2hob3ckokp99b7mtvr7ml",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "A lighter look at this week’s events",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "KAL’s cartoon",
                          "description": "A lighter look at this week’s events"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "War between Israel and Hamas",
                  "tegID": "capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/netanyahu-wages-war-and-fights-for-his-own-survival",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Netanyahu wages war and fights for his own survival",
                        "subheadline": "Bibi and the generals",
                        "datePublished": "2023-10-11T19:15:58Z",
                        "description": "A new emergency cabinet brings military experience, but not necessarily restraint",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_MAP508.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Middle East & Africa",
                              "tegID": "d65luhl1jc8au03dch2vom7g21h40h3h"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "6ca4ejqdirc42j8e6qq39dv5e8q13ske",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "tegID": "3s2rfthmsopmjgh1ga1uig77p0brempf",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "tegID": "capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Netanyahu wages war and fights for his own survival",
                          "description": "A new emergency cabinet brings military experience, but not necessarily restraint"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/a-hamas-leader-refuses-to-admit-his-group-planned-to-kill-civilians",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "A Hamas leader refuses to admit his group planned to kill civilians",
                        "subheadline": "An interview with Moussa Abu Marzouk",
                        "datePublished": "2023-10-11T11:45:44Z",
                        "description": "Moussa Abu Marzouk shows no remorse",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_MAP506.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Middle East & Africa",
                              "tegID": "d65luhl1jc8au03dch2vom7g21h40h3h"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "r1ft2qcq8kmldu8l7pbhvp8b7dcgte7m",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "tegID": "capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "A Hamas leader refuses to admit his group planned to kill civilians",
                          "description": "Moussa Abu Marzouk shows no remorse"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains/2023/10/10/how-powerful-is-hamas",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "SocialMediaPosting",
                          "BlogPosting",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "How powerful is Hamas?",
                        "subheadline": "The Economist explains",
                        "datePublished": "2023-10-10T17:53:00Z",
                        "description": "Long politically dominant in Gaza, it has become better equipped militarily",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP506.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": null,
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "The Economist explains",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "md2otnsr4fvud5kbahk8m3ktoif2fs2i"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "r21hmf2fsdallschpovord0i176b1pbp",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "tegID": "capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "How powerful is Hamas?",
                          "description": "Long politically dominant in Gaza, it has become better equipped militarily"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/2023/10/11/the-palestinian-cause-has-been-damaged-by-factionalism-argues-a-former-prime-minister",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "The Palestinian cause has been damaged by factionalism, argues a former prime minister",
                        "subheadline": "Israel and the Palestinians",
                        "datePublished": "2023-10-11T16:54:41Z",
                        "description": "Salam Fayyad believes that even now there is a route to greater unity—and eventual peace",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BID003.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "By Invitation",
                              "tegID": "arf6v6apbfv7pa17gm9ipjqoulhgsg79"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "rbrfdumhd36ieob21o16c0jptndbpd6p",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "tegID": "capvmgqbe5e2t1nj7mjvd048lb98sa1s",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The Palestinian cause has been damaged by factionalism, argues a former prime minister",
                          "description": "Salam Fayyad believes that even now there is a route to greater unity—and eventual peace"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/j5vnvuklvsp67a2kpkae2a153rtme7jn",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Business, finance and economics",
                  "tegID": "j5vnvuklvsp67a2kpkae2a153rtme7jn",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/2023/10/11/why-exxonmobil-is-paying-60bn-for-pioneer",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Why ExxonMobil is paying $60bn for Pioneer",
                        "subheadline": "A shale whale",
                        "datePublished": "2023-10-11T18:48:59Z",
                        "description": "Consolidation will transform America’s fragmented shale industry",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WBP501.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Business",
                              "tegID": "79244csej12lltat5mgqtckdp41aagcj"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "4:51",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "q7c61cbbqek8m0m81btv1ejk4lpla6sj",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "tegID": "j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Why ExxonMobil is paying $60bn for Pioneer",
                          "description": "Consolidation will transform America’s fragmented shale industry"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/2023/10/05/why-investors-cannot-escape-china-exposure",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Why investors cannot escape China exposure",
                        "subheadline": "Buttonwood",
                        "datePublished": "2023-10-05T10:13:35Z",
                        "description": "The country’s minuscule stockmarket is only the start of the story",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_FND003.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Finance & economics",
                              "tegID": "h4u9v391l483f78oe4pku4pu3jsqgj9k"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "5:43",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "c94lh5bc3u3ega76jbohe6thuilhnnbo"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "tojv0hev5spkhd7ftfak48vr6c18iodm"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "idndovcvf7l7vfi1709s4ri4ofpfahmv"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j2o6819ri83cq424ue6dtle6baivkv33"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "7pdh11df2vsfr4rakplq70u6aj6aqv1j"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "vbh3d90anttp8os45sqghtq3dmhcesdf"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "i8b0r1crg2h4no736mda7qqr5tep9ukp"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "fhr9icq2av90u2hle5bpjgacs324bc96"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "0q0h8da3gdl54262qhoac97vmlq60ph4",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "tegID": "j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "context": {
                              "headline": "Buttonwood: Why investors cannot escape China exposure",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/fukefci8uo2nnpua545nqbcqhbtjnmr7",
                            "tegID": "fukefci8uo2nnpua545nqbcqhbtjnmr7",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Buttonwood: Why investors cannot escape China exposure",
                          "description": "The country’s minuscule stockmarket is only the start of the story"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/10/11/america-may-soon-be-spending-more-on-debt-service-than-defence",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "America may soon be spending more on debt service than defence",
                        "subheadline": "Daily chart",
                        "datePublished": "2023-10-11T18:02:51Z",
                        "description": "Official estimates show that net interest costs will reach 3% of GDP by 2028",
                        "image": {
                          "main": null,
                          "__typename": "Media",
                          "promo": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT027.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content"
                          }
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Graphic detail",
                              "tegID": "1l07da86vc09cce3ne8rc07coph2m3a0"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "4no4nr35hl2oc1cmtmii19n118ngi775",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "tegID": "j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "America may soon be spending more on debt service than defence",
                          "description": "Official estimates show that net interest costs will reach 3% of GDP by 2028"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/2023/10/09/claudia-goldin-wins-the-nobel-prize-in-economics",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Claudia Goldin wins the Nobel prize in economics",
                        "subheadline": "Golden Goldin",
                        "datePublished": "2023-10-09T20:45:24Z",
                        "description": "Her work has overturned assumptions about gender equality",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_FNP002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Finance & economics",
                              "tegID": "h4u9v391l483f78oe4pku4pu3jsqgj9k"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:06",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "eqq2kp6frh6ad6sb8pdtr8m8l0i14de7",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/40tj8bencnll432bo2shho85lt744k9r",
                            "tegID": "40tj8bencnll432bo2shho85lt744k9r",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "tegID": "j5vnvuklvsp67a2kpkae2a153rtme7jn",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Claudia Goldin wins the Nobel prize in economics",
                          "description": "Her work has overturned assumptions about gender equality"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "World news",
                  "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/international/2023/10/11/the-global-backlash-against-climate-policies-has-begun",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "The global backlash against climate policies has begun",
                        "subheadline": "It’s not easy being green",
                        "datePublished": "2023-10-11T18:05:06Z",
                        "description": "Cost, convenience and conspiracy-mongering undercut support for greenery",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_IRD001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/international/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "International",
                              "tegID": "rak941tjj66itoj6cbc8e8nb40kuij19"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "20:37",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "b06prptev1l4v7gag2jtec7qt3bj8prj",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/ahlc3om1o9a4uq4mela2tl02r5m84b9j",
                            "tegID": "ahlc3om1o9a4uq4mela2tl02r5m84b9j",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "The backlash against greenery",
                              "subheadline": "",
                              "description": "Cost, convenience and conspiracy\u00ad-mongering undercut support for pro-\u00adclimate policies,\r\n",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The global backlash against climate policies has begun",
                          "description": "Cost, convenience and conspiracy-mongering undercut support for greenery"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/china/2023/10/05/many-of-the-worlds-new-mpox-cases-are-in-china",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Many of the world’s new mpox cases are in China",
                        "subheadline": "Viral slurs",
                        "datePublished": "2023-10-05T12:47:55Z",
                        "description": "Conservatism and nationalism are blocking efforts to curb the disease’s spread",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_CND001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/china/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "China",
                              "tegID": "39p10mis2mcu4j80ed1thv6leh044cjn"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "4:32",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "c94lh5bc3u3ega76jbohe6thuilhnnbo"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "tojv0hev5spkhd7ftfak48vr6c18iodm"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "idndovcvf7l7vfi1709s4ri4ofpfahmv"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j2o6819ri83cq424ue6dtle6baivkv33"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "7pdh11df2vsfr4rakplq70u6aj6aqv1j"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "vbh3d90anttp8os45sqghtq3dmhcesdf"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "i8b0r1crg2h4no736mda7qqr5tep9ukp"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "fhr9icq2av90u2hle5bpjgacs324bc96"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "jt3666lfl4bc46l9s8ebfldkqbs02nir",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Many of the world’s new mpox cases are in China",
                          "description": "Conservatism and nationalism are blocking efforts to curb the disease’s spread"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/2023/10/11/britains-labour-party-embraces-supply-side-social-democracy",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Britain’s Labour Party embraces supply-side social democracy",
                        "subheadline": "There is an alternative",
                        "datePublished": "2023-10-11T18:37:27Z",
                        "description": "Sir Keir Starmer’s agenda for government starts with reforms to planning",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BRP002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Britain",
                              "tegID": "2ldk64u3gt7tku874lf6kfi40e2nvts6"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:17",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "84akcpd78isvqeca8hjb3jd6e1buv2k7",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "Supply-side Starmer",
                              "subheadline": "",
                              "description": "Labour’s leader has an agenda that starts with planning-\u00adreform",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Britain’s Labour Party embraces supply-side social democracy",
                          "description": "Sir Keir Starmer’s agenda for government starts with reforms to planning"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/10/11/australians-are-no-longer-united-on-aboriginal-rights",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Australians are no longer united on Aboriginal rights",
                        "subheadline": "Daily chart",
                        "datePublished": "2023-10-11T03:09:48Z",
                        "description": "The “Voice” referendum to give indigenous people more influence in politics is likely to fail",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT882.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT882.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content"
                          }
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Graphic detail",
                              "tegID": "1l07da86vc09cce3ne8rc07coph2m3a0"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "er1ch98ghjge67hloe3ikg69c2mjpiob",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/brgrqqv7m05m7vs3qb8ms42ushtup923",
                            "tegID": "brgrqqv7m05m7vs3qb8ms42ushtup923",
                            "context": {
                              "headline": "",
                              "subheadline": "Daily chart",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Australians are no longer united on Aboriginal rights",
                          "description": "The “Voice” referendum to give indigenous people more influence in politics is likely to fail"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/lj321a5qu78ps5e6obhjispmcboe4e07",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Great reads",
                  "tegID": "lj321a5qu78ps5e6obhjispmcboe4e07",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    },
                    {
                      "id": "/content/8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "tegID": "8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/culture/2023/10/06/spy-womaniser-cad-the-writer-who-created-james-bond",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Spy, womaniser, cad: the writer who created James Bond",
                        "subheadline": "The man with the golden pen",
                        "datePublished": "2023-10-06T18:03:32Z",
                        "description": "A new biography tries to make sense of Ian Fleming",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_CUP001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/culture/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Culture",
                              "tegID": "rvj2s19g2lkbek4tevm6sn1va1se84sl"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "9:13",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "8filsabqh1gq9b0gbo8na1r7jbe31it5",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/lj321a5qu78ps5e6obhjispmcboe4e07",
                            "tegID": "lj321a5qu78ps5e6obhjispmcboe4e07",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Spy, womaniser, cad: the writer who created James Bond",
                          "description": "A new biography tries to make sense of Ian Fleming"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/2023/10/12/the-fall-of-chinas-manganese-king-may-hit-global-ev-supply-chains",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "The fall of China’s “manganese king” may hit global EV supply chains",
                        "subheadline": "A royal mess",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "And leave a hole in Xi Jinping’s economic plans",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WBP503.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Business",
                              "tegID": "79244csej12lltat5mgqtckdp41aagcj"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "5:22",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "s5dq8jj77bu4amsskuc1h77l3cmfh03e",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/lj321a5qu78ps5e6obhjispmcboe4e07",
                            "tegID": "lj321a5qu78ps5e6obhjispmcboe4e07",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The fall of China’s “manganese king” may hit global EV supply chains",
                          "description": "And leave a hole in Xi Jinping’s economic plans"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/2023/10/12/why-british-politicians-are-defending-women-only-spaces",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Why British politicians are defending women-only spaces",
                        "subheadline": "Gender and politics",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "Labour and the Conservatives end up agreeing on a contentious issue",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BRD002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Britain",
                              "tegID": "2ldk64u3gt7tku874lf6kfi40e2nvts6"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "4:16",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "4c94ltrvsh17u8clra1r0sch90tu2srf",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/lj321a5qu78ps5e6obhjispmcboe4e07",
                            "tegID": "lj321a5qu78ps5e6obhjispmcboe4e07",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Why British politicians are defending women-only spaces",
                          "description": "Labour and the Conservatives end up agreeing on a contentious issue"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/2023/10/12/new-york-city-discovers-a-revolutionary-technology-the-bin",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "New York City discovers a revolutionary technology: the bin",
                        "subheadline": "Trash talk",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "Using crime fighting tactics, the city is taking on its rats and rubbish",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_USP002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "United States",
                              "tegID": "h4j4itd8schld2m55dnrjg1ro8nlttoc"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "6:13",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "4r3jpq4j9p35ghapuvmolh0ihg31cf0q",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/lj321a5qu78ps5e6obhjispmcboe4e07",
                            "tegID": "lj321a5qu78ps5e6obhjispmcboe4e07",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "New York City discovers a revolutionary technology: the bin",
                          "description": "Using crime fighting tactics, the city is taking on its rats and rubbish"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/miau8akile3iqb95t23luvetgurg9nlt",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Ukraine’s long war",
                  "tegID": "miau8akile3iqb95t23luvetgurg9nlt",
                  "cta": {
                    "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ukraine-crisis",
                    "text": "Explore more of our coverage",
                    "__typename": "CTA"
                  },
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    },
                    {
                      "id": "/content/8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "tegID": "8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/05/the-war-in-ukraine-is-threatening-to-wash-across-the-black-sea",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "The war in Ukraine is threatening to wash across the Black Sea",
                        "subheadline": "Ripple effect",
                        "datePublished": "2023-10-05T12:47:55Z",
                        "description": "And to roil grain and oil markets again",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_FBP001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Briefing",
                              "tegID": "ig92fd080i1j2q35gel3sev1e8r72j9r"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "17:29",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "c94lh5bc3u3ega76jbohe6thuilhnnbo"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "tojv0hev5spkhd7ftfak48vr6c18iodm"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "idndovcvf7l7vfi1709s4ri4ofpfahmv"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j2o6819ri83cq424ue6dtle6baivkv33"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "7pdh11df2vsfr4rakplq70u6aj6aqv1j"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "vbh3d90anttp8os45sqghtq3dmhcesdf"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "i8b0r1crg2h4no736mda7qqr5tep9ukp"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "fhr9icq2av90u2hle5bpjgacs324bc96"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "97jfa8dn922bjn2g8mhdcjrmmn7m7i22",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/oo1g2mu19b88b2lvpr6vv0e3rc0gkrmc",
                            "tegID": "oo1g2mu19b88b2lvpr6vv0e3rc0gkrmc",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/miau8akile3iqb95t23luvetgurg9nlt",
                            "tegID": "miau8akile3iqb95t23luvetgurg9nlt",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/1upofor37eh39nl5jim1ap1puac7k401",
                            "tegID": "1upofor37eh39nl5jim1ap1puac7k401",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The war in Ukraine is threatening to wash across the Black Sea",
                          "description": "And to roil grain and oil markets again"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843/2023/10/03/an-autistic-ukrainian-boy-lived-by-routine-then-the-russians-upended-his-world",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "An autistic Ukrainian boy lived by routine. Then the Russians upended his world",
                        "subheadline": "Ukraine",
                        "datePublished": "2023-10-03T13:13:03Z",
                        "description": "Under occupation, no one has an ordinary life",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/1843_20231003_1843_artem_01.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 773,
                            "height": 854
                          },
                          "__typename": "Media",
                          "promo": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/1843_20231003_1843_artem_Teaser.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content"
                          }
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "1843 magazine",
                              "tegID": "lt4151741raqm0fi11oq7iur88ea2iko"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "ri5hl3jo320hqvn2au8chu0d1qfvbinj",
                          "__typename": "Content"
                        },
                        "tegID": "55s4sp5k714aug6cqrkm1i4gr0kc03n9",
                        "byline": "Wendell Steavenson with Marta Rodionova",
                        "isPartOf": [
                          {
                            "id": "/content/6o0u2op2hn6bitskucvqmtijq12bk7in",
                            "tegID": "6o0u2op2hn6bitskucvqmtijq12bk7in",
                            "context": {
                              "headline": "",
                              "subheadline": "Ukraine",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/miau8akile3iqb95t23luvetgurg9nlt",
                            "tegID": "miau8akile3iqb95t23luvetgurg9nlt",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "An autistic Ukrainian boy lived by routine. Then the Russians upended his world",
                          "description": "Under occupation, no one has an ordinary life"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/europe/2023/10/02/ukraine-prepares-for-winter-again-as-russia-targets-its-power-grid",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Ukraine prepares for winter again as Russia targets its power grid",
                        "subheadline": "Winter is coming, once more",
                        "datePublished": "2023-10-02T16:46:11Z",
                        "description": "Things may be tougher this time",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_EUP504.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/europe/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Europe",
                              "tegID": "75ks360ifh4d6k3c3n17b7s7uqcvb61a"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "5:52",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "c94lh5bc3u3ega76jbohe6thuilhnnbo"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "tojv0hev5spkhd7ftfak48vr6c18iodm"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "idndovcvf7l7vfi1709s4ri4ofpfahmv"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j2o6819ri83cq424ue6dtle6baivkv33"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "7pdh11df2vsfr4rakplq70u6aj6aqv1j"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "vbh3d90anttp8os45sqghtq3dmhcesdf"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "i8b0r1crg2h4no736mda7qqr5tep9ukp"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 7TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-07",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "fhr9icq2av90u2hle5bpjgacs324bc96"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "pjpg1i9ehsvgcchmt0vkj07rscm02j48",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/oo1g2mu19b88b2lvpr6vv0e3rc0gkrmc",
                            "tegID": "oo1g2mu19b88b2lvpr6vv0e3rc0gkrmc",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/miau8akile3iqb95t23luvetgurg9nlt",
                            "tegID": "miau8akile3iqb95t23luvetgurg9nlt",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Ukraine prepares for winter again as Russia targets its power grid",
                          "description": "Things may be tougher this time"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/interactive/graphic-detail/ukraine-fires",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Tracking the Ukraine war: where is the latest fighting?",
                        "subheadline": "Blow by blow",
                        "datePublished": "2023-06-16T16:37:11Z",
                        "description": "Our satellite view of the conflict, updated daily",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230624_WOT919.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230624_WOT919.png",
                              "__typename": "URL"
                            },
                            "__typename": "Content"
                          }
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Graphic detail",
                              "tegID": "1l07da86vc09cce3ne8rc07coph2m3a0"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": null,
                        "publication": null,
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "353eq3371tre21g7gklvrgf1u23ce2g4",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/najna33vld7rpkbghjep3m5be44iii9q",
                            "tegID": "najna33vld7rpkbghjep3m5be44iii9q",
                            "context": {
                              "headline": "",
                              "subheadline": "Blow by blow",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/miau8akile3iqb95t23luvetgurg9nlt",
                            "tegID": "miau8akile3iqb95t23luvetgurg9nlt",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/vrtq9qpe3lvpqej9kandu9firk4up8qk",
                            "tegID": "vrtq9qpe3lvpqej9kandu9firk4up8qk",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Tracking the Ukraine war: where is the latest fighting?",
                          "description": "Our satellite view of the conflict, updated daily"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/k9ihd7cv20423adm2760n0jt5p2fcipm",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Longevity",
                  "tegID": "k9ihd7cv20423adm2760n0jt5p2fcipm",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "tegID": "8mmm7h9v7arvfpvn4n20hakmg4ugatur",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    },
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/09/28/living-to-120-is-becoming-an-imaginable-prospect",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Living to 120 is becoming an imaginable prospect",
                        "subheadline": "Elixir of life",
                        "datePublished": "2023-09-28T09:19:32Z",
                        "description": "Efforts to slow ageing are taking wing",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230930_LDD001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Leaders",
                              "tegID": "0eqdc3kshoq96naup34ruco7pktc6n51"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:21",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "1tgf7ild49hs1cj9bl10mbm9ij3reif0"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jcqoup8rfrphekdue6kuljtj9oihedtl"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "v949vl2p0a2m67qcam9qtl824rcvdst5"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "4pqtvnqqca6lkgacf2vte0gljhbdpaq7"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j3qo3gkn03v6h9cd7rhl6skijh6cebem"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogb272li0qc23mdt8uqrks29i3qibci6"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "27k7kg0226cq8od9qbsqe0q6g3n4mpg4"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jrqbk9430iigrkhnhsim099u3bmt3uq6"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "o0c5k8uo1afoi4k3b27mjrd02rkfmmkq",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "tegID": "k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Living to 120 is becoming an imaginable prospect",
                          "description": "Efforts to slow ageing are taking wing"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023/09/25/slowing-human-ageing-is-now-the-subject-of-serious-research",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Slowing human ageing is now the subject of serious research",
                        "subheadline": "In search of forever",
                        "datePublished": "2023-09-25T10:48:56Z",
                        "description": "And some of it is making progress, writes Geoffrey Carr",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230930_TQD001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly-articles/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Technology Quarterly",
                              "tegID": "71cvis08tehcupiohc0r2hngig3sa1bh"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "11:38",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "In search of forever",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogel5bp0sjk4sqanag6chded8dunj51m"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "1tgf7ild49hs1cj9bl10mbm9ij3reif0"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jcqoup8rfrphekdue6kuljtj9oihedtl"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "v949vl2p0a2m67qcam9qtl824rcvdst5"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "4pqtvnqqca6lkgacf2vte0gljhbdpaq7"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j3qo3gkn03v6h9cd7rhl6skijh6cebem"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogb272li0qc23mdt8uqrks29i3qibci6"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "27k7kg0226cq8od9qbsqe0q6g3n4mpg4"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jrqbk9430iigrkhnhsim099u3bmt3uq6"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "082l1fo9g4l3v7cih07s8dulils8mm1n",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "tegID": "k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "context": {
                              "headline": "There are 12 hallmarks of ageing. Can they all be managed?",
                              "subheadline": "",
                              "description": "Even dealing with part of the list will bring people better lives",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "There are 12 hallmarks of ageing. Can they all be managed?",
                          "description": "Even dealing with part of the list will bring people better lives"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023/09/25/eating-fewer-calories-can-ward-off-ageing",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Eating fewer calories can ward off ageing",
                        "subheadline": "Don’t be greedy",
                        "datePublished": "2023-09-25T10:48:56Z",
                        "description": "And various existing medicines may offer similar benefits",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230930_TQD002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly-articles/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Technology Quarterly",
                              "tegID": "71cvis08tehcupiohc0r2hngig3sa1bh"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "13:02",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "In search of forever",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogel5bp0sjk4sqanag6chded8dunj51m"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "1tgf7ild49hs1cj9bl10mbm9ij3reif0"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jcqoup8rfrphekdue6kuljtj9oihedtl"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "v949vl2p0a2m67qcam9qtl824rcvdst5"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "4pqtvnqqca6lkgacf2vte0gljhbdpaq7"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j3qo3gkn03v6h9cd7rhl6skijh6cebem"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogb272li0qc23mdt8uqrks29i3qibci6"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "27k7kg0226cq8od9qbsqe0q6g3n4mpg4"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jrqbk9430iigrkhnhsim099u3bmt3uq6"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "naj6vd3s25024nu4macsuvtu8rj41c67",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "tegID": "k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Eating fewer calories can ward off ageing",
                          "description": "And various existing medicines may offer similar benefits"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023/09/26/video-in-search-of-forever",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Video: In search of forever",
                        "subheadline": "Insight",
                        "datePublished": "2023-09-26T12:53:45Z",
                        "description": "Inside our correspondent’s investigation into the science of longevity",
                        "image": {
                          "main": null,
                          "__typename": "Media",
                          "promo": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230926_FLP001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content"
                          }
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly-articles/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Technology Quarterly",
                              "tegID": "71cvis08tehcupiohc0r2hngig3sa1bh"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "In search of forever",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/technology-quarterly/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogel5bp0sjk4sqanag6chded8dunj51m"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "1tgf7ild49hs1cj9bl10mbm9ij3reif0"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jcqoup8rfrphekdue6kuljtj9oihedtl"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "v949vl2p0a2m67qcam9qtl824rcvdst5"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "4pqtvnqqca6lkgacf2vte0gljhbdpaq7"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j3qo3gkn03v6h9cd7rhl6skijh6cebem"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ogb272li0qc23mdt8uqrks29i3qibci6"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "27k7kg0226cq8od9qbsqe0q6g3n4mpg4"
                          },
                          {
                            "headline": "WEEKLY EDITION: SEPT 30TH",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-09-30",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "jrqbk9430iigrkhnhsim099u3bmt3uq6"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "7qvovi3kgoddtg605s7b33kpglbm1cmt",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "tegID": "k9ihd7cv20423adm2760n0jt5p2fcipm",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Video: In search of forever",
                          "description": "Inside our correspondent’s investigation into the science of longevity"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/r8lpm3c65j9vjvha2ko58c4i63v6agu9",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Featured read",
                  "tegID": "r8lpm3c65j9vjvha2ko58c4i63v6agu9",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 1,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/2023/10/12/what-to-read-and-watch-about-indigenous-australians",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "What to read (and watch) about indigenous Australians",
                        "subheadline": "The Economist reads",
                        "datePublished": "2023-10-12T19:17:22Z",
                        "description": "Four books and a film that show why they want recognition of rights in the constitution",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP507.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "The Economist reads",
                              "tegID": "bkssndd4qjc2of3hc3l9jotkf8mdurr8"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "pnlt5h0vkndlpgt590ekg17vpmpkroml",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "tegID": "0qdp9p41cpt8h7d3gbdl79hr823s2kc6",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/r8lpm3c65j9vjvha2ko58c4i63v6agu9",
                            "tegID": "r8lpm3c65j9vjvha2ko58c4i63v6agu9",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "What to read (and watch) about indigenous Australians",
                          "description": "Four books and a film that show why they want recognition of rights in the constitution"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                },
                {
                  "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                  "type": [
                    "WebPage",
                    "CollectionPage"
                  ],
                  "headline": "Current edition",
                  "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                  "cta": null,
                  "isPartOf": [
                    {
                      "id": "/content/3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "tegID": "3tdqrs4eaqggikj93bt7t2ph40mbbhih",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    },
                    {
                      "id": "/content/dm6bpoggp6lojtgvb12a14t8s39ae2rh",
                      "tegID": "dm6bpoggp6lojtgvb12a14t8s39ae2rh",
                      "context": {
                        "headline": "",
                        "__typename": "Content"
                      },
                      "__typename": "Content"
                    }
                  ],
                  "hasPart": {
                    "total": 4,
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/2023/10/11/britains-labour-party-embraces-supply-side-social-democracy",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Britain’s Labour Party embraces supply-side social democracy",
                        "subheadline": "There is an alternative",
                        "datePublished": "2023-10-11T18:37:27Z",
                        "description": "Sir Keir Starmer’s agenda for government starts with reforms to planning",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BRP002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/britain/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Britain",
                              "tegID": "2ldk64u3gt7tku874lf6kfi40e2nvts6"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "8:17",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "84akcpd78isvqeca8hjb3jd6e1buv2k7",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "Supply-side Starmer",
                              "subheadline": "",
                              "description": "Labour’s leader has an agenda that starts with planning-\u00adreform",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Supply-side Starmer",
                          "description": "Labour’s leader has an agenda that starts with planning-\u00adreform"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/2023/10/12/to-beat-populists-sensible-policymakers-must-up-their-game",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "To beat populists, sensible policymakers must up their game",
                        "subheadline": "Free exchange",
                        "datePublished": "2023-10-12T09:47:54Z",
                        "description": "Weak economic growth is dangerous, as a wave of elections next year may show",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_FND002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Finance & economics",
                              "tegID": "h4u9v391l483f78oe4pku4pu3jsqgj9k"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "7:42",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "dg634ses1riiph5dti8vijbqqa6c13on",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "Technocrats v populists",
                              "subheadline": "",
                              "description": "To ward off dangerous politicians, moderate policymakers must up their game",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "Technocrats v populists",
                          "description": "To ward off dangerous politicians, moderate policymakers must up their game"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/international/2023/10/11/the-global-backlash-against-climate-policies-has-begun",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "The global backlash against climate policies has begun",
                        "subheadline": "It’s not easy being green",
                        "datePublished": "2023-10-11T18:05:06Z",
                        "description": "Cost, convenience and conspiracy-mongering undercut support for greenery",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_IRD001.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/international/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "International",
                              "tegID": "rak941tjj66itoj6cbc8e8nb40kuij19"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "20:37",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "b06prptev1l4v7gag2jtec7qt3bj8prj",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/ahlc3om1o9a4uq4mela2tl02r5m84b9j",
                            "tegID": "ahlc3om1o9a4uq4mela2tl02r5m84b9j",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "tegID": "j0og9vdd7gojugseg96kcfnv3vo1n226",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "tegID": "rub9fp80o76tvs47pioqhp3nd0bte2q1",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "The backlash against greenery",
                              "subheadline": "",
                              "description": "Cost, convenience and conspiracy\u00ad-mongering undercut support for pro-\u00adclimate policies,\r\n",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          },
                          {
                            "id": "/content/0fik3hfitkd1too712s7q7m7mmu041li",
                            "tegID": "0fik3hfitkd1too712s7q7m7mmu041li",
                            "context": {
                              "headline": "",
                              "subheadline": "",
                              "description": "",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "The backlash against greenery",
                          "description": "Cost, convenience and conspiracy\u00ad-mongering undercut support for pro-\u00adclimate policies,\r\n"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/2023/10/12/trialling-the-two-day-workweek",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Trialling the two-day workweek",
                        "subheadline": "Bartleby",
                        "datePublished": "2023-10-12T14:04:45Z",
                        "description": "The results of one firm’s experiment with a bold new idea",
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WBD002.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media",
                          "promo": null
                        },
                        "articleSection": {
                          "internal": [
                            {
                              "url": {
                                "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/",
                                "__typename": "URL"
                              },
                              "__typename": "Content",
                              "headline": "Business",
                              "tegID": "79244csej12lltat5mgqtckdp41aagcj"
                            }
                          ],
                          "__typename": "Taxonomies"
                        },
                        "audio": {
                          "main": {
                            "duration": "5:50",
                            "__typename": "Content"
                          },
                          "__typename": "Media"
                        },
                        "publication": [
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "mkl7g5i7ukcngoqmoqqsf4id8do7eomk"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/eu/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "crs5k79sdfam806bv15thf2j1gfdnbb7"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/ap/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "nfmfvsk3viiamhkjdecacr88gkjepnae"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/la/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "gk3aka71fdpkmh59tefprdrfo1ifpjql"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/me/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "si5g7ikd7trm3qncv474icbeoo5043bd"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/uk/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "ku55rla76flfa793ovt1iies3e858utr"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/na/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "j1t0nhfh21m1sop4o3udt0ltm42frase"
                          },
                          {
                            "headline": "WEEKLY EDITION: OCT 14TH 2023",
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/a/printedition/2023-10-14",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "tegID": "0commeq0uujp7kh7f4cc7ev5dgrico9k"
                          }
                        ],
                        "channel": {
                          "tegID": "j53t6hsedat4l7rkbb1le98u73262sh5",
                          "__typename": "Content"
                        },
                        "tegID": "d9sk44t7q84flauajuu1tlu4gork0aie",
                        "byline": "",
                        "isPartOf": [
                          {
                            "id": "/content/12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "tegID": "12e6f2dsrn6oe65pllt6mdpup1imsraf",
                            "context": {
                              "headline": "A two-\u00adday week: misery or bliss?",
                              "subheadline": "",
                              "description": "The results of one firm’s experiment with a bold new idea\r\n",
                              "image": {
                                "main": {
                                  "url": null,
                                  "__typename": "Content",
                                  "width": null,
                                  "height": null
                                },
                                "__typename": "Media"
                              },
                              "__typename": "Content"
                            },
                            "__typename": "Content"
                          }
                        ],
                        "_metadata": {
                          "headline": "A two-\u00adday week: misery or bliss?",
                          "description": "The results of one firm’s experiment with a bold new idea\r\n"
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  },
                  "__typename": "Content"
                }
              ],
              "__typename": "HasPart"
            },
            "__typename": "Content"
          },
          "currentEdition": {
            "regionsAllowed": [
              "AF",
              "AS",
              "AU",
              "BD",
              "BT",
              "BN",
              "KH",
              "CN",
              "CK",
              "FJ",
              "GU",
              "PF",
              "HK",
              "IN",
              "ID",
              "JP",
              "KI",
              "KP",
              "KR",
              "LA",
              "MO",
              "MY",
              "MV",
              "MH",
              "FM",
              "MN",
              "MM",
              "NR",
              "NP",
              "NC",
              "NZ",
              "PK",
              "PG",
              "PH",
              "PN",
              "SC",
              "SG",
              "SB",
              "LK",
              "TF",
              "TW",
              "TH",
              "TO",
              "TV",
              "VU",
              "VN",
              "IO",
              "CC",
              "TL",
              "HM",
              "NU",
              "NF",
              "MP",
              "PW",
              "WS",
              "CX",
              "TK",
              "WF"
            ],
            "image": {
              "cover": [
                {
                  "url": {
                    "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_DE_AP.jpg",
                    "__typename": "URL"
                  },
                  "__typename": "Content",
                  "regionsAllowed": [
                    "AF",
                    "AS",
                    "AU",
                    "BD",
                    "BT",
                    "BN",
                    "KH",
                    "CN",
                    "CK",
                    "FJ",
                    "GU",
                    "PF",
                    "HK",
                    "IN",
                    "ID",
                    "JP",
                    "KI",
                    "KP",
                    "KR",
                    "LA",
                    "MO",
                    "MY",
                    "MV",
                    "MH",
                    "FM",
                    "MN",
                    "MM",
                    "NR",
                    "NP",
                    "NC",
                    "NZ",
                    "PK",
                    "PG",
                    "PH",
                    "PN",
                    "SC",
                    "SG",
                    "SB",
                    "LK",
                    "TF",
                    "TW",
                    "TH",
                    "TO",
                    "TV",
                    "VU",
                    "VN",
                    "IO",
                    "CC",
                    "TL",
                    "HM",
                    "NU",
                    "NF",
                    "MP",
                    "PW",
                    "WS",
                    "CX",
                    "TK",
                    "WF"
                  ],
                  "headline": "Israel’s agony and its retribution",
                  "width": 1280,
                  "height": 1684
                }
              ],
              "__typename": "Media"
            },
            "headline": "WEEKLY EDITION: OCT 14TH 2023",
            "description": "",
            "datePublished": "2023-10-14T00:00:00Z",
            "__typename": "Content"
          },
          "specialReport": {
            "id": "/content/uho24sq264kg0rahi1qp92nn2vkslh6g",
            "type": [
              "WebPage",
              "CollectionPage"
            ],
            "hasPart": {
              "parts": [
                {
                  "type": [
                    "PublicationIssue",
                    "Report",
                    "SpecialReport"
                  ],
                  "headline": "Homeland Economics",
                  "description": "Governments across the world are rediscovering industrial policy. They are making a big mistake, argues Callum Williams",
                  "datePublished": "2023-10-07T00:00:00Z",
                  "url": {
                    "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023-10-07",
                    "__typename": "URL"
                  },
                  "__typename": "Content",
                  "image": {
                    "main": {
                      "url": {
                        "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRR.jpg",
                        "__typename": "URL"
                      },
                      "__typename": "Content",
                      "width": 1280,
                      "height": 1684
                    },
                    "__typename": "Media"
                  },
                  "hasPart": {
                    "parts": [
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/governments-across-the-world-are-discovering-homeland-economics",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Governments across the world are discovering “homeland economics”",
                        "description": "But introducing industrial policy is a big mistake, argues Callum Williams",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "Redividing the world",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP062.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "Governments across the world are discovering “homeland economics”",
                          "description": "But introducing industrial policy is a big mistake, argues Callum Williams"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/attempts-to-make-supply-chains-resilient-are-likely-to-fail",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Attempts to make supply chains “resilient” are likely to fail",
                        "description": "And they are likely to be costly",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "Demand for supplies",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP064.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "Attempts to make supply chains “resilient” are likely to fail",
                          "description": "And they are likely to be costly"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/homeland-economics-will-make-the-world-poorer",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "“Homeland economics” will make the world poorer",
                        "description": "Industrial policy and protectionism could endanger trade, without making Western economies safer",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "State v market",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP539.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "“Homeland economics” will make the world poorer",
                          "description": "Industrial policy and protectionism could endanger trade, without making Western economies safer"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/new-industrial-policies-will-make-the-world-more-unequal",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "New industrial policies will make the world more unequal",
                        "description": "Workers in the developing world will especially lose out",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "Missing the point",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP063.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "New industrial policies will make the world more unequal",
                          "description": "Workers in the developing world will especially lose out"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/green-protectionism-comes-with-big-risks",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Green protectionism comes with big risks",
                        "description": "Some analysts worry that new laws could slow the green transition",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "Second-best",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP060.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "Green protectionism comes with big risks",
                          "description": "Some analysts worry that new laws could slow the green transition"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/new-industrial-policies-will-not-help-economic-stability",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "New industrial policies will not help economic stability",
                        "description": "Globalisation has not been perfect but it has been effective",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": "In search of a problem",
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": {
                            "url": {
                              "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_SRP540.jpg",
                              "__typename": "URL"
                            },
                            "__typename": "Content",
                            "width": 1280,
                            "height": 720
                          },
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "New industrial policies will not help economic stability",
                          "description": "Globalisation has not been perfect but it has been effective"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/video-busting-globalisation-myths",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Video: Busting globalisation myths",
                        "description": "How our correspondent followed his hunch about protectionism",
                        "datePublished": "2023-10-02T19:20:25Z",
                        "print": {
                          "headline": null,
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "Video: Busting globalisation myths",
                          "description": "How our correspondent followed his hunch about protectionism"
                        }
                      },
                      {
                        "url": {
                          "canonical": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/special-report/2023/10/02/sources-and-acknowledgments",
                          "__typename": "URL"
                        },
                        "__typename": "Content",
                        "type": [
                          "Article",
                          "NewsArticle",
                          "AnalysisNewsArticle"
                        ],
                        "headline": "Sources and acknowledgments",
                        "description": "",
                        "datePublished": "2023-10-02T08:41:52Z",
                        "print": {
                          "headline": null,
                          "section": {
                            "headline": "Special report",
                            "__typename": "Content"
                          },
                          "__typename": "Print"
                        },
                        "image": {
                          "main": null,
                          "__typename": "Media"
                        },
                        "_metadata": {
                          "headline": "Sources and acknowledgments",
                          "description": ""
                        }
                      }
                    ],
                    "__typename": "HasPart"
                  }
                }
              ],
              "__typename": "HasPart"
            },
            "__typename": "Content"
          },
          "region": "HK",
          "worldInBrief": {
            "id": "/content/ori0aurt5vsta1hh6tma0de1do1v0gu2",
            "headline": "The world in brief, October 13th 2023",
            "datePublished": "2023-10-12T18:56:30Z",
            "dateModified": "2023-10-13T07:25:28Z",
            "image": {
              "main": {
                "url": {
                  "canonical": "https://cdn.espresso.economist.com/files/public/images/20231014_dap342.jpg",
                  "__typename": "URL"
                },
                "width": 1170,
                "height": 1170,
                "byline": "Getty Images",
                "__typename": "Content"
              },
              "inline": null,
              "__typename": "Media"
            },
            "text": [
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "data": "The ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Israel Defence Forces ",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": "told some 1.1m ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Palestinians",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " to relocate from north to south Gaza within 24 hours. In the evacuation order, which was first shared with the UN, the IDF said “",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/12/hamass-atrocities-and-israels-retaliation-will-change-both-sides-for-ever"
                    },
                    "children": [
                      {
                        "data": "Hamas terrorists",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": "” were hiding behind “human shields” in north Gaza, but insisted it was taking “extensive efforts to avoid harming civilians”. On Thursday America’s secretary of state, Antony Blinken, visited Israel in a show of solidarity. Lloyd Austin, America’s defence secretary, is expected to follow suit on Friday.",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "America ",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": "will block ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Iran",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " from getting access to the $6bn in Iranian funds that was transferred to Qatar ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/09/18/irans-6bn-hostage-deal-is-part-of-a-broader-diplomatic-strategy"
                    },
                    "children": [
                      {
                        "data": "last month",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " in exchange for the release of imprisoned Americans. Republicans have slammed President Joe Biden for making money available to Iran—even with strict restrictions—since Hamas’s attack on Israel. American officials said no evidence tied Iran to the operation, but it has historically supported the terrorist group.",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Britain’s ",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": "competition watchdog approved ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Microsoft’s",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " $75bn offer to buy ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Activision Blizzard",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": ". The Competition and Markets Authority had ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/business/2023/07/13/britain-hands-microsofts-activision-deal-an-extra-life"
                    },
                    "children": [
                      {
                        "data": "rejected",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " the tech giant’s previous bid to buy the video-game maker. In the revised deal, Microsoft will licence cloud-streaming rights of Activision titles, such as ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "em",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Call of Duty",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": ", to Ubisoft, a French games publisher. This would prevent Microsoft from having a stranglehold on the market, the CMA said.",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Steve Scalise",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": ", the Republican congressman who ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/2023/10/12/the-worst-job-in-washington-is-within-steve-scalises-grasp"
                    },
                    "children": [
                      {
                        "data": "won",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " his party’s nomination to be speaker of America’s House of Representatives, withdrew from the race after failing to secure broad support from his party. “There are still some people that have their own agendas,” he said. Winning the speakership on the full House floor requires 217 votes. The House ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/united-states/2023/10/12/paralysis-in-congress-makes-america-a-dysfunctional-superpower"
                    },
                    "children": [
                      {
                        "data": "cannot consider legislation",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " without a permanent speaker. ",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Russian",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " and ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Ukrainian",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " troops engaged in fierce fighting around Avdiivka, a town in eastern Ukraine. Russia has sent thousands of troops to storm the town, which is near the Russian-occupied city of Donetsk. Progress from ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/09/01/ukraines-counter-offensive-is-speeding-up"
                    },
                    "children": [
                      {
                        "data": "Ukraine’s counter-offensive",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " has been slower than hoped—and its enemy appears to be hitting back. ",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "China’s",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " consumer prices remained unexpectedly flat in September. Analysts had predicted a 0.2% increase from a year earlier. A slowdown in the property sector may be dampening household demand—food prices, for instance, dropped by 3.2%. Core inflation, excluding food and fuel prices, climbed 0.8% year-on-year. On Tuesday the IMF lowered its growth forecast for ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/08/24/why-chinas-economy-wont-be-fixed"
                    },
                    "children": [
                      {
                        "data": "China",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " for the rest of this year and next. ",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "data": "The ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "International Olympic Committee",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " suspended the ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Russian Olympic Committee ",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": "for incorporating sporting bodies in four regions of Ukraine that have been illegally annexed by Russia. The IOC called that move a “breach of the Olympic charter”. It has not decided whether Russian athletes will be allowed to compete under a neutral flag at the Paris ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains/2022/02/10/why-are-russian-athletes-competing-at-the-winter-olympics-as-the-roc"
                    },
                    "children": [
                      {
                        "data": "Olympics",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": " in 2024. If they are, Ukraine may boycott the games.",
                    "type": "text"
                  }
                ]
              },
              {
                "type": "tag",
                "name": "p",
                "attribs": {},
                "children": [
                  {
                    "type": "tag",
                    "name": "strong",
                    "attribs": {},
                    "children": [
                      {
                        "data": "Figure of the day",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "data": ": €60m, the tranche of aid that Tunisia wired back to the European Union as they jostle over migration. ",
                    "type": "text"
                  },
                  {
                    "type": "tag",
                    "name": "a",
                    "attribs": {
                      "href": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/europe/2023/10/12/the-eus-endless-search-for-a-migration-fix"
                    },
                    "children": [
                      {
                        "data": "Read the full story.",
                        "type": "text"
                      }
                    ]
                  }
                ]
              }
            ],
            "__typename": "Content"
          },
          "sections": [
            {
              "title": {
                "text": "Podcasts",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts"
              },
              "articles": [
                {
                  "headline": "Why Claudia Goldin won the Nobel Prize for economics",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts/2023/10/12/why-claudia-goldin-won-the-nobel-prize-for-economics",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_PDP508.jpg"
                  }
                },
                {
                  "headline": "What will a successful ground invasion look like for Israel?",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts/2023/10/12/what-will-a-successful-ground-invasion-look-like-for-israel",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_PDP507.jpg"
                  }
                },
                {
                  "headline": "How infrastructure shapes and improves our world—an interview with Deb Chachra",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/podcasts/2023/10/11/how-infrastructure-shapes-and-improves-our-world-an-interview-with-deb-chachra",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_PDP502.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "Films",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/films"
              },
              "articles": [
                {
                  "headline": "The new world order",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/films/2023/10/11/the-new-world-order",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231011_FLP002.jpg"
                  }
                },
                {
                  "headline": "Plastic is polluting the ocean",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/films/2023/10/11/plastic-is-polluting-the-ocean",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231011_FLP001.jpg"
                  }
                },
                {
                  "headline": "Israel and the Palestinians: a century of conflict",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/films/2023/10/10/israel-and-the-palestinians-a-century-of-conflict",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231010_FLP002.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "1843 magazine",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843"
              },
              "articles": [
                {
                  "headline": "People in Gaza hate the night. All they can see are explosions",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843/2023/10/10/people-in-gaza-hate-the-night-all-they-can-see-are-explosions",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/1843_20231010_1843_GAZA_TEASER.jpg"
                  }
                },
                {
                  "headline": "“It’s an Anne Frank situation”: an Israeli professor hides from Hamas",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843/2023/10/08/its-an-anne-frank-situation-an-israeli-professor-hides-from-hamas",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/1843_20231008_1843_HAMAS_TEASER.jpg"
                  }
                },
                {
                  "headline": "Abortion bans in America are corroding some doctors’ souls",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/1843/2023/10/06/abortion-bans-in-america-are-corroding-some-doctors-souls",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/1843_20231006_1843_OBS_GYNAE_TEASER.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "Climate change",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/climate-change"
              },
              "articles": [
                {
                  "headline": "How to deal with the global anti-climate backlash",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/10/12/how-to-deal-with-the-global-anti-climate-backlash",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_LDD002.jpg"
                  }
                },
                {
                  "headline": "The global backlash against climate policies has begun",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/international/2023/10/11/the-global-backlash-against-climate-policies-has-begun",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_IRD001.jpg"
                  }
                },
                {
                  "headline": "How carbon prices are taking over the world",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/finance-and-economics/2023/10/01/how-carbon-prices-are-taking-over-the-world",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231007_FND001.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "By Invitation",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/"
              },
              "articles": [
                {
                  "headline": "Jaroslaw Kuisz on the testy relationship between Poland and Ukraine",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/2023/10/12/jaroslaw-kuisz-on-the-testy-relationship-between-poland-and-ukraine",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BID004.jpg"
                  }
                },
                {
                  "headline": "Nimrod Novik on the false premises and failure of vision that led to the Hamas attacks",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/2023/10/12/nimrod-novik-on-the-false-premises-and-failure-of-vision-that-led-to-the-hamas-attacks",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BID002.jpg"
                  }
                },
                {
                  "headline": "The Palestinian cause has been damaged by factionalism, argues a former prime minister",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/by-invitation/2023/10/11/the-palestinian-cause-has-been-damaged-by-factionalism-argues-a-former-prime-minister",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BID003.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "Graphic detail",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/"
              },
              "articles": [
                {
                  "headline": "America may soon be spending more on debt service than defence",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/10/11/america-may-soon-be-spending-more-on-debt-service-than-defence",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT027.png"
                  }
                },
                {
                  "headline": "Australians are no longer united on Aboriginal rights",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/10/11/australians-are-no-longer-united-on-aboriginal-rights",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT882.png"
                  }
                },
                {
                  "headline": "Where will the next coup be in Africa?",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/graphic-detail/2023/10/09/where-will-the-next-coup-be-in-africa",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_WOT972.png"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "The Economist explains",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains"
              },
              "articles": [
                {
                  "headline": "A short history of Gaza",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains/2023/10/12/a-short-history-of-gaza",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP521.jpg"
                  }
                },
                {
                  "headline": "Why the Polish election campaign has been so vicious",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains/2023/10/11/why-the-polish-election-campaign-has-been-so-vicious",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP512.jpg"
                  }
                },
                {
                  "headline": "How powerful is Hamas?",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-explains/2023/10/10/how-powerful-is-hamas",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP506.jpg"
                  }
                }
              ]
            },
            {
              "title": {
                "text": "The Economist reads",
                "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/"
              },
              "articles": [
                {
                  "headline": "What to read (and watch) about indigenous Australians",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/2023/10/12/what-to-read-and-watch-about-indigenous-australians",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_BLP507.jpg"
                  }
                },
                {
                  "headline": "What to read to understand journalism",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/2023/09/29/what-to-read-to-understand-journalism",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230930_BLP502.jpg"
                  }
                },
                {
                  "headline": "A selection of novels to read this autumn",
                  "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/the-economist-reads/2023/09/22/a-selection-of-novels-to-read-this-autumn",
                  "image": {
                    "alt": "",
                    "src": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20230923_BLP507.jpg"
                  }
                }
              ]
            }
          ],
          "parselyMostRead": [
            {
              "_hits": 26643,
              "author": "Staff",
              "authors": [
                "Staff"
              ],
              "full_content_word_count": 1407,
              "image_url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_MAP503.jpg",
              "link": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/09/after-its-brutal-attack-hamas-is-calculating-its-next-move?itm_source=parsely-api",
              "metadata": "",
              "metrics": {
                "views": 26643
              },
              "pub_date": "2023-10-09T20:42:32",
              "section": "Middle East & Africa",
              "tags": [
                "parsely_smart:entity:2014 Gaza War",
                "parsely_smart:entity:Gaza Strip",
                "parsely_smart:entity:Gaza War (2008–2009)",
                "parsely_smart:entity:Gilad Shalit",
                "parsely_smart:entity:Hamas",
                "parsely_smart:entity:Israel",
                "parsely_smart:entity:Palestinian political violence",
                "parsely_smart:entity:Palestinian prisoners in Israel",
                "parsely_smart:entity:Palestinians",
                "parsely_smart:entity:War",
                "parsely_smart:iab:Islam",
                "parsely_smart:iab:Law, Gov’t & Politics",
                "parsely_smart:iab:Politics",
                "parsely_smart:iab:Religion & Spirituality"
              ],
              "thumb_url_medium": "https://images.parsely.com/0Ptq6i9KWKcL0tsJHahIB1kfaHM=/85x85/smart/https%3A//www.economist.com/media-assets/image/20231014_MAP503.jpg",
              "title": "After its brutal attack, Hamas is calculating its next move",
              "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/09/after-its-brutal-attack-hamas-is-calculating-its-next-move?itm_source=parsely-api"
            },
            {
              "_hits": 16832,
              "author": "Staff",
              "authors": [
                "Staff"
              ],
              "full_content_word_count": 1552,
              "image_url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_MAP507.jpg",
              "link": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/brutal-urban-warfare-awaits-israels-army-in-gaza?itm_source=parsely-api",
              "metadata": "",
              "metrics": {
                "views": 16832
              },
              "pub_date": "2023-10-11T07:25:49",
              "section": "Middle East & Africa",
              "tags": [
                "parsely_smart:entity:2014 Gaza War",
                "parsely_smart:entity:Airstrike",
                "parsely_smart:entity:Gaza Strip",
                "parsely_smart:entity:Gaza War (2008–2009)",
                "parsely_smart:entity:Hamas",
                "parsely_smart:entity:Invasion",
                "parsely_smart:entity:Israel",
                "parsely_smart:entity:Israel Defense Forces",
                "parsely_smart:entity:Palestinian fedayeen",
                "parsely_smart:entity:Palestinian political violence",
                "parsely_smart:entity:Urban warfare",
                "parsely_smart:iab:Law, Gov’t & Politics"
              ],
              "thumb_url_medium": "https://images.parsely.com/qqoKDjMPmaJM9JgJrYyno8KTQYc=/85x85/smart/https%3A//www.economist.com/media-assets/image/20231014_MAP507.jpg",
              "title": "Brutal urban warfare awaits Israel’s army in Gaza",
              "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/brutal-urban-warfare-awaits-israels-army-in-gaza?itm_source=parsely-api"
            },
            {
              "_hits": 11524,
              "author": "Staff",
              "authors": [
                "Staff"
              ],
              "full_content_word_count": 919,
              "image_url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_MAP506.jpg",
              "link": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/a-hamas-leader-refuses-to-admit-his-group-planned-to-kill-civilians?itm_source=parsely-api",
              "metadata": "",
              "metrics": {
                "views": 11524
              },
              "pub_date": "2023-10-11T11:45:44",
              "section": "Middle East & Africa",
              "tags": [
                "parsely_smart:entity:2014 Gaza War",
                "parsely_smart:entity:Gaza Strip",
                "parsely_smart:entity:Gaza War (2008–2009)",
                "parsely_smart:entity:Hamas",
                "parsely_smart:entity:Islamism",
                "parsely_smart:entity:Israel",
                "parsely_smart:entity:Mousa Mohammed Abu Marzook",
                "parsely_smart:entity:Palestinians",
                "parsely_smart:entity:Yahya Sinwar",
                "parsely_smart:iab:Islam",
                "parsely_smart:iab:Law, Gov’t & Politics",
                "parsely_smart:iab:Politics",
                "parsely_smart:iab:Religion & Spirituality",
                "parsely_smart:iab:Society"
              ],
              "thumb_url_medium": "https://images.parsely.com/8XjnnK5BT4LKQRQxRjVwBAG_dyc=/85x85/smart/https%3A//www.economist.com/media-assets/image/20231014_MAP506.jpg",
              "title": "A Hamas leader refuses to admit his group planned to kill civilians",
              "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/middle-east-and-africa/2023/10/11/a-hamas-leader-refuses-to-admit-his-group-planned-to-kill-civilians?itm_source=parsely-api"
            },
            {
              "_hits": 10597,
              "author": "Staff",
              "authors": [
                "Staff"
              ],
              "full_content_word_count": 1105,
              "image_url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_LDD001.jpg",
              "link": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/10/12/will-israels-agony-and-retribution-end-in-chaos-or-stability?itm_source=parsely-api",
              "metadata": "",
              "metrics": {
                "views": 10597
              },
              "pub_date": "2023-10-12T09:34:25",
              "section": "Leaders",
              "tags": [
                "parsely_smart:entity:2014 Gaza War",
                "parsely_smart:entity:Gaza Strip",
                "parsely_smart:entity:Hamas",
                "parsely_smart:entity:Israel",
                "parsely_smart:entity:Palestinians",
                "parsely_smart:iab:Law, Gov’t & Politics",
                "parsely_smart:iab:Legal Issues",
                "parsely_smart:iab:Politics"
              ],
              "thumb_url_medium": "https://images.parsely.com/e4QASa6nzVY88iYCEe1N0qcmLA8=/85x85/smart/https%3A//www.economist.com/media-assets/image/20231014_LDD001.jpg",
              "title": "Will Israel’s agony and retribution end in chaos or stability?",
              "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/leaders/2023/10/12/will-israels-agony-and-retribution-end-in-chaos-or-stability?itm_source=parsely-api"
            },
            {
              "_hits": 10242,
              "author": "Staff",
              "authors": [
                "Staff"
              ],
              "full_content_word_count": 2854,
              "image_url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/media-assets/image/20231014_FBP001.jpg",
              "link": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/12/hamass-atrocities-and-israels-retaliation-will-change-both-sides-for-ever?itm_source=parsely-api",
              "metadata": "",
              "metrics": {
                "views": 10242
              },
              "pub_date": "2023-10-12T10:28:19",
              "section": "Briefing",
              "tags": [
                "parsely_smart:entity:Gaza Strip",
                "parsely_smart:entity:Hamas",
                "parsely_smart:entity:Israel",
                "parsely_smart:entity:Palestinian political violence",
                "parsely_smart:iab:Law, Gov’t & Politics",
                "parsely_smart:iab:Politics"
              ],
              "thumb_url_medium": "https://images.parsely.com/61gvW2cSSR3RhF5f5_9j1Po8NcY=/85x85/smart/https%3A//www.economist.com/media-assets/image/20231014_FBP001.jpg",
              "title": "Hamas’s atrocities and Israel’s retaliation will change both sides for ever",
              "url": "http://159.138.11.4:8081/query/article?article_link=https://www.economist.com/briefing/2023/10/12/hamass-atrocities-and-israels-retaliation-will-change-both-sides-for-ever?itm_source=parsely-api"
            }
          ],
          "featureFlags": [
            "SF_SIGNPOSTING",
            "SOURCEPOINT",
            "ONBOARDING_NOTIFICATION",
            "ONBOARDING_GROUP_NOTIFICATION",
            "OPTIMIZELY_SELF_HOSTING",
            "LAPSED_USER_NOTIFICATION",
            "CP2",
            "IN_THIS_REPORT",
            "REGISTRANT_ONBOARDING",
            "SITEMAP",
            "APP_PROMO_PAGE",
            "CLOUDFLARE_IMAGE_FORMAT",
            "NEXT_SCRIPT_THIRD_PARTIES",
            "PODCAST_SHOW_PROMO_LINK_WIB",
            "SHOW_ARTICLE_UPDATED_DATE",
            "SUMMER_EDITION_1843",
            "CP2_MIXING",
            "CP2_LEAD_IMAGES",
            "CP2_SKELETON",
            "CP2_BODY",
            "CP2_FEATURE_HEADER",
            "PODCAST_NATIVE_AUDIO_PLAYER"
          ],
          "newsletters": {
            "newsletters": [
              {
                "code": "the_war_room",
                "availableTo": [
                  "core"
                ],
                "ident": "the-war-room",
                "title": "The War Room",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/the_war_room?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "the-war-room",
                "hasPreview": true,
                "isNew": false,
                "description": "The best of <em>The Economist</em>’s defence coverage, in one place",
                "promo": {
                  "title": "",
                  "description": "",
                  "tagline": "Subscriber only"
                },
                "keywords": [],
                "priority": -1,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "plot_twist",
                "availableTo": [
                  "core"
                ],
                "ident": "plot-twist",
                "title": "Plot Twist",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Plot_Twist?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "plot-twist",
                "hasPreview": true,
                "isNew": false,
                "description": "A weekly conversation about culture. Because culture is a serious business",
                "promo": {
                  "title": "Broaden your perspective with our weekly culture newsletter",
                  "description": "Exploring trends and connections across entertainment, the arts and politics",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "Culture"
                ],
                "priority": 2,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "blighty",
                "availableTo": [
                  "core"
                ],
                "ident": "blighty",
                "title": "Blighty",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Blighty?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "blighty",
                "hasPreview": true,
                "isNew": false,
                "description": "Analysing the challenges facing Britain and what needs to be done to overcome them",
                "promo": {
                  "title": "Stay informed with our weekly Britain newsletter",
                  "description": "Analysing the challenges facing Britain and what needs to be done to overcome them",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "Britain"
                ],
                "priority": 2,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "drum_tower",
                "availableTo": [
                  "core"
                ],
                "ident": "drum-tower",
                "title": "Drum Tower",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/drumtower?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "drum-tower",
                "hasPreview": true,
                "isNew": false,
                "description": "Understand what the world makes of China—and what China makes of the world",
                "promo": {
                  "title": "Stay informed with our weekly China newsletter",
                  "description": "Understand what the world makes of China—and what China makes of the world",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "China"
                ],
                "priority": 2,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "the_bottom_line",
                "availableTo": [
                  "core"
                ],
                "ident": "the-bottom-line",
                "title": "The Bottom Line",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/the_bottom_line?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "the-bottom-line",
                "hasPreview": true,
                "description": "Your essential guide to global business and technology",
                "promo": {
                  "title": "Need to track the megatrends shaping business and technology?",
                  "description": "From supply chains to semiconductors, The Bottom Line newsletter has you covered",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "Business"
                ],
                "priority": 2,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "espresso",
                "availableTo": [
                  "espresso",
                  "core"
                ],
                "ident": "the-world-in-brief",
                "title": "The World in Brief",
                "frequency": "Daily",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/the_world_in_brief?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "the-world-in-brief",
                "hasPreview": true,
                "description": "Catch up quickly on the global stories that matter",
                "promo": {
                  "title": "Catch up quickly on the stories that matter",
                  "description": "Sign up to enjoy a mind-expanding mix of stories, delivered six days a week",
                  "tagline": "Subscriber only"
                },
                "keywords": [],
                "priority": -1,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "cover_story",
                "availableTo": [
                  "core"
                ],
                "ident": "cover-story",
                "title": "Cover Story",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Cover_Story?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "cover-story",
                "hasPreview": true,
                "description": "A behind-the-scenes look at how we chose and designed this week’s cover",
                "promo": {
                  "title": "How we chose this week’s cover image",
                  "description": "Delivered to your inbox every weekend",
                  "tagline": "Subscriber only"
                },
                "keywords": [],
                "priority": 3,
                "isKeywordFallback": false,
                "onboardingPreSelect": true,
                "live": true
              },
              {
                "code": "checks_and_balance",
                "availableTo": [
                  "core"
                ],
                "ident": "checks-and-balance",
                "title": "Checks and Balance",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Checks_and_Balance?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "checks-and-balance",
                "hasPreview": true,
                "description": "Exclusive insight from our correspondents in America",
                "promo": {
                  "title": "Exclusive insight and reading recommendations from our correspondents in America",
                  "description": "Delivered to your inbox every week",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "United States",
                  "United States Senate",
                  "Republican Party",
                  "Donald Trump",
                  "Joe Biden",
                  "Democratic Party",
                  "Executive Office of the President of the United States"
                ],
                "priority": 6,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "simply_science",
                "availableTo": [
                  "core"
                ],
                "ident": "simply-science",
                "title": "Simply Science",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Simply_Science2?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "simply-science",
                "hasPreview": true,
                "description": "A weekly fix of our mind-expanding science coverage",
                "promo": {
                  "title": "Curious about the world? Enjoy a weekly fix of our mind-expanding science coverage",
                  "description": "Delivered to you every week",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "science and technology",
                  "Science & technology",
                  "biology",
                  "astronomy",
                  "philosophy",
                  "chemistry",
                  "diseases and conditions",
                  "genetics",
                  "cancer",
                  "medicine",
                  "physics"
                ],
                "priority": 4,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "climate_change",
                "availableTo": [
                  "core"
                ],
                "ident": "the-climate-issue",
                "title": "The Climate Issue",
                "frequency": "Fortnightly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Climate_issue?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "the-climate-issue",
                "hasPreview": true,
                "description": "Climate-change analysis that you won’t read elsewhere in <em>The Economist</em>",
                "promo": {
                  "title": "Climate-change analysis that you won’t read elsewhere in <em>The Economist</em>",
                  "description": "Delivered to your inbox every fortnight",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "energy industry",
                  "migration of people",
                  "weather",
                  "energy and resource",
                  "plant",
                  "synthetic and plastic chemicals",
                  "forestry and timber",
                  "climate change",
                  "global warming",
                  "environment",
                  "environmental politics",
                  "environmental pollution"
                ],
                "priority": 5,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "money_talks",
                "availableTo": [
                  "core"
                ],
                "ident": "money-talks",
                "title": "Money Talks",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/money_talks?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "money-talks",
                "hasPreview": true,
                "description": "Expert analysis of the biggest stories in economics and markets",
                "promo": {
                  "title": "Expert analysis of the biggest stories in economics and markets",
                  "description": "Delivered to your inbox every week",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "Finance & economics"
                ],
                "priority": 100,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "off_the_charts",
                "availableTo": [
                  "core"
                ],
                "ident": "off-the-charts",
                "title": "Off the Charts",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/Off_the_charts2?oid=00D3z000002JvyiEAC",
                "tagline": "Subscriber only",
                "slug": "off-the-charts",
                "hasPreview": true,
                "description": "Taking you behind the scenes of our data journalism",
                "promo": {
                  "title": "Taking you behind the scenes of our data journalism",
                  "description": "Directly to your inbox every week",
                  "tagline": "Subscriber only"
                },
                "keywords": [
                  "Graphic detail"
                ],
                "priority": 99,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "the_extraordinary_story",
                "availableTo": [
                  "anonymous",
                  "registered",
                  "espresso",
                  "podcast",
                  "core"
                ],
                "ident": "the-extraordinary-story",
                "title": "The Extraordinary Story",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/the_extraordinary_story?oid=00D3z000002JvyiEAC",
                "slug": "the-extraordinary-story",
                "hasPreview": true,
                "description": "Long reads and life from <em>1843 magazine</em>",
                "promo": {
                  "title": "Long reads and life from <em>1843 magazine</em>",
                  "description": "Delivered to your inbox every weekend",
                  "tagline": ""
                },
                "keywords": [
                  "1843 magazine"
                ],
                "priority": 100,
                "isKeywordFallback": false,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "te_today",
                "availableTo": [
                  "anonymous",
                  "registered",
                  "espresso",
                  "podcast",
                  "core"
                ],
                "ident": "the-economist-today",
                "title": "The Economist today",
                "frequency": "Daily",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/The_Economist_Today?oid=00D3z000002JvyiEAC",
                "slug": "the-economist-today",
                "hasPreview": true,
                "description": "The very best of our journalism, handpicked for you each weekday",
                "promo": {
                  "title": "Handpicked stories, in your inbox",
                  "description": "A daily newsletter with the best of our journalism",
                  "tagline": ""
                },
                "keywords": [],
                "priority": 0,
                "isKeywordFallback": true,
                "onboardingPreSelect": false,
                "live": true
              },
              {
                "code": "te_this_week",
                "availableTo": [
                  "anonymous",
                  "registered",
                  "espresso",
                  "podcast",
                  "core"
                ],
                "ident": "the-economist-this-week",
                "title": "The Economist this week",
                "frequency": "Weekly",
                "imageUrl": "https://myaccount.economist.com/file-asset-public/The_Economist_This_Week?oid=00D3z000002JvyiEAC",
                "slug": "the-economist-this-week",
                "hasPreview": true,
                "description": "Highlights from the latest weekly issue, introduced by our editor",
                "promo": {
                  "title": "Highlights from the latest weekly issue, introduced by our editor",
                  "description": "Directly to your inbox every week",
                  "tagline": ""
                },
                "keywords": [],
                "priority": 2,
                "isKeywordFallback": false,
                "onboardingPreSelect": true,
                "live": true
              }
            ],
            "status": "ok"
          }
        }
      },
      "page": "/",
      "query": {},
      "buildId": "ExHVUitpocjmmWMMUffQS",
      "assetPrefix": "/engassets",
      "isFallback": false,
      "gip": true,
      "appGip": true,
      "scriptLoader": []
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
