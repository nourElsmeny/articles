'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">art documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' : 'data-target="#xs-controllers-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' :
                                            'id="xs-controllers-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ArticlesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticlesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' : 'data-target="#xs-injectables-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' :
                                        'id="xs-injectables-links-module-AppModule-c6d9ccd4aa564314e4a08f83567030df"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ArticlesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ArticlesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelperService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HelperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticlesModule.html" data-type="entity-link">ArticlesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Articles.html" data-type="entity-link">Articles</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArticlesRepositry.html" data-type="entity-link">ArticlesRepositry</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthAutherMiddleware.html" data-type="entity-link">AuthAutherMiddleware</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentDto.html" data-type="entity-link">CommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comments.html" data-type="entity-link">Comments</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentsRepositry.html" data-type="entity-link">CommentsRepositry</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDto.html" data-type="entity-link">CreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Devices.html" data-type="entity-link">Devices</a>
                            </li>
                            <li class="link">
                                <a href="classes/DevicesRepositry.html" data-type="entity-link">DevicesRepositry</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto.html" data-type="entity-link">FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LikeDto.html" data-type="entity-link">LikeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link">LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogoutDto.html" data-type="entity-link">LogoutDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reply.html" data-type="entity-link">Reply</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReplyRepositry.html" data-type="entity-link">ReplyRepositry</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignupDto.html" data-type="entity-link">SignupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserExistDto.html" data-type="entity-link">UserExistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepositry.html" data-type="entity-link">UserRepositry</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link">Users</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthUserMiddleware.html" data-type="entity-link">AuthUserMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});