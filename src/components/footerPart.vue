<template>

  <footer itemtype="http://schema.org/WPFooter" class="ds-footer" role="contentinfo">
    <div class="ds-layout-grid ds-footer-cols-alpha">
      <div id="ds-footer-customer-links" class="ds-footer-cols-alpha__lead">
        <ul class="ds-footer__link-list">
          <li v-for="item in top.leftContent">
            <a
              class="ds-navigation-link ds-navigation-link--secondary ds-navigation-link--major ds-navigation-link--inverse"
               :href="item.href"
            >
              <span>{{item.content}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="ds-footer-cols-share">
        <h2 class="ds-footer__header">Keep updated</h2>
        <ul class="ds-footer__link-list">
          <li id="ds-footer-facebook-icon"><a class="ds-share-link ds-share-link--inverse"
                                              href="https://www.facebook.com/theeconomist" data-analytics="footer:facebook"><svg
              viewBox="-1 -1 34 34" width="32" height="32">
            <title>Facebook</title>
            <g fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <path class="path-foreground"
                    d="M17.49 26v-9.123h2.95l.44-3.555h-3.39v-2.27c0-1.03.276-1.731 1.697-1.731H21V6.14A23.34 23.34 0 0 0 18.359 6c-2.614 0-4.403 1.657-4.403 4.7v2.622H11v3.555h2.956V26h3.535z"
                    fill="#FFF" fill-rule="nonzero"></path>
            </g>
          </svg></a></li>
          <li id="ds-footer-instagram-icon"><a class="ds-share-link ds-share-link--inverse"
                                               href="https://www.instagram.com/theeconomist" data-analytics="footer:instagram"><svg
              viewBox="-1 -1 34 34" width="32" height="32">
            <title>Instagram</title>
            <defs>
              <path id="a" d="M0 .006h19.994v19.992H0z"></path>
            </defs>
            <g id="share-instagram" fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <g transform="translate(6 6)">
                <mask id="b" fill="#fff">
                  <use xlink:href="#a"></use>
                </mask>
                <path class="path-foreground"
                      d="M9.997.006c-2.715 0-3.056.012-4.122.06-1.064.049-1.79.218-2.426.465a4.9 4.9 0 0 0-1.771 1.153 4.9 4.9 0 0 0-1.153 1.77C.278 4.092.109 4.818.06 5.882.012 6.948 0 7.288 0 10.003s.012 3.056.06 4.122c.049 1.064.218 1.79.465 2.426a4.9 4.9 0 0 0 1.153 1.771 4.9 4.9 0 0 0 1.77 1.153c.636.247 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.218 2.426-.465a4.9 4.9 0 0 0 1.77-1.153 4.9 4.9 0 0 0 1.154-1.77c.247-.636.416-1.363.465-2.427.048-1.066.06-1.407.06-4.122s-.012-3.055-.06-4.122c-.049-1.064-.218-1.79-.465-2.426a4.9 4.9 0 0 0-1.153-1.77A4.9 4.9 0 0 0 16.546.53c-.637-.247-1.363-.416-2.427-.465-1.067-.048-1.407-.06-4.122-.06zm0 1.802c2.67 0 2.985.01 4.04.058.974.044 1.503.207 1.856.344.466.181.8.398 1.15.748.349.35.566.683.747 1.15.137.352.3.88.344 1.856.048 1.054.058 1.37.058 4.04 0 2.668-.01 2.985-.058 4.039-.044.974-.207 1.504-.344 1.856-.181.467-.398.8-.748 1.15-.35.35-.683.566-1.15.747-.352.137-.88.3-1.856.344-1.054.049-1.37.059-4.04.059-2.669 0-2.985-.01-4.039-.059-.974-.044-1.504-.207-1.856-.344a3.097 3.097 0 0 1-1.15-.748 3.097 3.097 0 0 1-.747-1.149c-.137-.352-.3-.882-.344-1.856-.049-1.054-.059-1.37-.059-4.04s.01-2.985.059-4.04c.044-.974.207-1.503.344-1.856.181-.466.398-.8.748-1.15.35-.349.682-.566 1.149-.747.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058z"
                      fill="#FFF" mask="url(#b)"></path>
              </g>
              <path class="path-foreground"
                    d="M15.997 19.335a3.332 3.332 0 1 1 0-6.664 3.332 3.332 0 0 1 0 6.664zm0-8.465a5.133 5.133 0 1 0 0 10.267 5.133 5.133 0 0 0 0-10.267zM22.533 10.667a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
                    fill="#FFF"></path>
            </g>
          </svg></a></li>
          <li id="ds-footer-twitter-icon"><a class="ds-share-link ds-share-link--inverse"
                                             href="https://www.twitter.com/theeconomist" data-analytics="footer:twitter"><svg
              viewBox="-1 -1 34 34" width="32" height="32">
            <title>Twitter</title>
            <g fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <path class="path-foreground"
                    d="M12.29 24c7.547 0 11.675-5.771 11.675-10.776 0-.164 0-.327-.012-.49A8.024 8.024 0 0 0 26 10.774a8.73 8.73 0 0 1-2.357.596c.857-.474 1.498-1.218 1.804-2.095a8.65 8.65 0 0 1-2.605.919c-1.272-1.248-3.293-1.554-4.93-.745-1.637.808-2.483 2.53-2.063 4.2-3.3-.153-6.373-1.592-8.457-3.958-1.09 1.73-.533 3.945 1.27 5.056a4.335 4.335 0 0 1-1.862-.474v.048c0 1.803 1.377 3.356 3.292 3.713a4.429 4.429 0 0 1-1.853.065c.538 1.542 2.078 2.6 3.834 2.63-1.453 1.054-3.248 1.626-5.096 1.624-.327 0-.653-.018-.977-.054a12.334 12.334 0 0 0 6.29 1.698"
                    fill="#FFF"></path>
            </g>
          </svg></a></li>
          <li id="ds-footer-linkedin-icon"><a class="ds-share-link ds-share-link--inverse"
                                              href="https://www.linkedin.com/company/the-economist" data-analytics="footer:linked_in"><svg
              viewBox="-1 -1 34 34" width="32" height="32">
            <title>LinkedIn</title>
            <g fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <path class="path-foreground"
                    d="M25 24h-3.728v-5.847c0-1.395-.025-3.188-1.938-3.188-1.942 0-2.239 1.519-2.239 3.087V24h-3.728V11.977h3.579v1.642h.05c.497-.945 1.714-1.941 3.53-1.941 3.777 0 4.474 2.49 4.474 5.727V24zM9.163 10.333A2.165 2.165 0 0 1 7 8.166C7 6.971 7.968 6 9.163 6c1.193 0 2.162.97 2.162 2.166s-.969 2.167-2.162 2.167zM7.297 24h3.73V11.977h-3.73V24z"
                    fill="#FFF"></path>
            </g>
          </svg></a></li>
          <li id="ds-footer-youtube-icon"><a class="ds-share-link ds-share-link--inverse"
                                             href="https://www.youtube.com/user/economistmagazine" data-analytics="footer:you_tube"><svg
              viewBox="-1 -1 34 34" width="32" height="32">
            <title>YouTube</title>
            <g id="share-youtube" fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <path class="path-foreground"
                    d="M25.582 11.186C26 12.746 26 16 26 16s0 3.254-.418 4.814a2.504 2.504 0 0 1-1.768 1.768C22.254 23 16 23 16 23s-6.254 0-7.814-.418a2.504 2.504 0 0 1-1.768-1.768C6 19.254 6 16 6 16s0-3.254.418-4.814c.23-.86.908-1.538 1.768-1.768C9.746 9 16 9 16 9s6.254 0 7.814.418c.86.23 1.538.908 1.768 1.768zm-11.515 7.772l5.196-3-5.196-3v6z"
                    fill="#FFF"></path>
            </g>
          </svg></a></li>
          <li id="ds-footer-rss-icon"><a class="ds-share-link ds-share-link--inverse"
                                         href="https://www.economist.com/rss" data-analytics="footer:rss"><svg viewBox="-1 -1 34 34"
                                                                                                               width="32" height="32">
            <title>RSS</title>
            <g id="share-rss" fill="none" fill-rule="evenodd">
              <circle class="path-background" fill="#333" cx="16" cy="16" r="16"></circle>
              <circle class="path-foreground" fill="#FFF" cx="11.453" cy="21.052" r="2.453"></circle>
              <path class="path-foreground"
                    d="M9 6v3.184c7.909 0 14.321 6.412 14.321 14.321h3.184C26.505 13.841 18.664 6 9 6zm0 6.367v3.184c4.387 0 7.954 3.566 7.954 7.954h3.183c0-6.154-4.983-11.137-11.137-11.137z"
                    fill="#FFF" fill-rule="nonzero"></path>
            </g>
          </svg></a></li>
        </ul>
      </div>
      <p class="ds-footer__mission-statement">Published since September 1843 to take part in<!-- --> <em>“a severe
        contest between intelligence, which presses forward, and an unworthy, timid ignorance obstructing our
        progress.”</em> </p>
    </div>
    <nav class="ds-layout-grid ds-footer-cols-lambda">
      <div id="ds-footer-the-economist" class="ds-footer-cols-lambda__group">
        <h2 class="ds-footer__header">{{middle.economist.title}}</h2>
        <ul class="ds-footer__link-list">
          <li v-for="item in middle.economist.list ">
            <a class="ds-navigation-link ds-navigation-link--secondary ds-navigation-link--inverse"
               :href="item.href"><span>{{item.content}}</span></a></li>
        </ul>
      </div>
      <div id="ds-footer-the-economist-group" class="ds-footer-cols-lambda__group">
        <h2 class="ds-footer__header">{{middle.economistGroup.title}}</h2>
        <ul class="ds-footer__link-list">
          <li v-for="item in middle.economistGroup.list ">
            <a class="ds-navigation-link ds-navigation-link--secondary ds-navigation-link--inverse"
               :href="item.href"><span>{{item.content}}</span></a></li>
        </ul>
      </div>
    </nav>
    <div class="ds-footer-cols-omega">
      <ul class="ds-footer__link-list">
        <li v-for="item in footer" :id="item.id">
          <a class="ds-navigation-link ds-navigation-link--secondary ds-navigation-link--minor ds-navigation-link--inverse"
             :href="item.href"><span>{{item.content}}</span></a></li>
      </ul>
      <p id="ds-footer-copyright" class="ds-footer__copyright">Copyright © The Economist Newspaper Limited 2023. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      top:{
        leftContent:[{
          href:"https://www.economist.com/api/auth/subscribe?path=%2FDE%2FECOM-Home%2FHoliday20%2FFooter",
          content:"Subscribe"
        },{
          href:"https://www.economist.com/group-subscriptions/",
          content:"Group subscriptions"
        },{
          href:"https://rights.economist.com/",
          content:"Reuse our content"
        },{
          href:"https://www.economist.com/frequently-asked-questions",
          content:"The Trust Project"
        },{
          href:"https://myaccount.economist.com/s/help",
          content:"Help and contact us"
        }],
        middleIcon:{},
      },
      middle:{economist:{
          title:"The Economist",
          list:[{
            href:"https://www.economistgroup.com/about-us",
            content:"About",
          },{
            href:"https://impact.economist.com/",
            content:"Advertise",
          },{
            href:"https://www.economistgroup.com/group-news",
            content:"centre",
          }]
        },economistGroup:{
          title:"The Economist Group",
          list:[{"href":"https://www.economistgroup.com/","content":"The Economist Group"},{"href":"https://www.eiu.com/n/","content":"Economist Intelligence"},{"href":"https://impact.economist.com/","content":"Economist Impact"},{"href":"https://events.economist.com/?RefID=e.com-home&utm_source=e.com&utm_medium=website&utm_campaign=group-aff&utm_content=footer-link","content":"Economist Impact Events"},{"href":"https://www.economistgroup.com/careers","content":"Working Here"},{"href":"https://education.economist.com/","content":"Economist Education Courses"},{"href":"https://whichmba.economist.com/","content":"Which MBA?"},{"href":"http://jobs.economist.com/","content":"Executive Jobs"},{"href":"https://execed.economist.com/","content":"Executive Education Navigator"}]
        }},
      footer:[{"id":"footer-terms-of-use","href":"https://www.economistgroup.com/terms-of-use","content":"Terms of Use"},{"id":"footer-privacy","href":"https://www.economistgroup.com/privacy-policy","content":"Privacy"},{"id":"footer-cookie-policy","href":"https://www.economistgroup.com/cookies-policy","content":"Cookie Policy"},{"id":"footer-manage-cookies","href":"http://localhost:8080/#","content":"Manage Cookies"},{"id":"footer-accessibility","href":"https://www.economistgroup.com/accessibility-policy","content":"Accessibility"},{"id":"footer-modern-slavery-statement","href":"https://www.economistgroup.com/esg/modern-slavery-act-statement","content":"Modern Slavery Statement"},{"id":"sitemap","href":"https://www.economist.com/sitemap","content":"Sitemap"},{"id":"footer-ccpa","href":"https://www.economist.com/privacyportal","content":"Your Data Rights"}]
    }
  },
  name: "footerPart"
}
</script>

<style scoped lang="scss">
</style>