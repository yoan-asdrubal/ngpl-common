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
                    <a href="index.html" data-type="index-link">ngpl-library documentation</a>
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
                                            'data-target="#components-links-module-AppModule-2706b9cbb4a1838c0087ceae16b2e34e"' : 'data-target="#xs-components-links-module-AppModule-2706b9cbb4a1838c0087ceae16b2e34e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2706b9cbb4a1838c0087ceae16b2e34e"' :
                                            'id="xs-components-links-module-AppModule-2706b9cbb4a1838c0087ceae16b2e34e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgplDirectivesTestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplDirectivesTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgplSelectTestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplSelectTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkeletonTestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SkeletonTestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NgplCommonDirectivesModule.html" data-type="entity-link">NgplCommonDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgplCommonDirectivesModule-3b1035524f16337d09318f174bacf732"' : 'data-target="#xs-directives-links-module-NgplCommonDirectivesModule-3b1035524f16337d09318f174bacf732"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgplCommonDirectivesModule-3b1035524f16337d09318f174bacf732"' :
                                        'id="xs-directives-links-module-NgplCommonDirectivesModule-3b1035524f16337d09318f174bacf732"' }>
                                        <li class="link">
                                            <a href="directives/NgplControlErrorContainerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplControlErrorContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplControlErrorsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplControlErrorsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplDecimalNumberDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplDecimalNumberDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplDisableReactiveControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplDisableReactiveControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplFormSubmitDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplFormSubmitDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplIntegerNumberDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplIntegerNumberDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplMinWidthDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplMinWidthDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplNumberFormatDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplNumberFormatDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplPreventKeyboardDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplPreventKeyboardDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplWidthDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplWidthDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgplCommonFilterModule.html" data-type="entity-link">NgplCommonFilterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' : 'data-target="#xs-directives-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' :
                                        'id="xs-directives-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' }>
                                        <li class="link">
                                            <a href="directives/NgplAutofocusDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplAutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgplFilterConfigDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplFilterConfigDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' : 'data-target="#xs-pipes-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' :
                                            'id="xs-pipes-links-module-NgplCommonFilterModule-afd579949e55741c585b2fb843702c8f"' }>
                                            <li class="link">
                                                <a href="pipes/NgplFilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgplCommonModule.html" data-type="entity-link">NgplCommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NgplCommonPipesModule.html" data-type="entity-link">NgplCommonPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NgplCommonPipesModule-69f40fc00a13c40bc7983e9b61063f42"' : 'data-target="#xs-pipes-links-module-NgplCommonPipesModule-69f40fc00a13c40bc7983e9b61063f42"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgplCommonPipesModule-69f40fc00a13c40bc7983e9b61063f42"' :
                                            'id="xs-pipes-links-module-NgplCommonPipesModule-69f40fc00a13c40bc7983e9b61063f42"' }>
                                            <li class="link">
                                                <a href="pipes/NgplFillPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplFillPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NgplGeneratePagesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplGeneratePagesPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NgplHighlightPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplHighlightPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NgplSafeHtmlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplSafeHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NgplSafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplSafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NgplSliceItemsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplSliceItemsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgplCommonSkeletonModule.html" data-type="entity-link">NgplCommonSkeletonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgplCommonSkeletonModule-2842d8e901c97ee111b60409a64976cd"' : 'data-target="#xs-components-links-module-NgplCommonSkeletonModule-2842d8e901c97ee111b60409a64976cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgplCommonSkeletonModule-2842d8e901c97ee111b60409a64976cd"' :
                                            'id="xs-components-links-module-NgplCommonSkeletonModule-2842d8e901c97ee111b60409a64976cd"' }>
                                            <li class="link">
                                                <a href="components/NgplSkeletonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgplSkeletonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NgplControlErrorComponent.html" data-type="entity-link">NgplControlErrorComponent</a>
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
                                <a href="classes/NgplCustomSelectionModel.html" data-type="entity-link">NgplCustomSelectionModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgplCustomSelectionModelImpl.html" data-type="entity-link">NgplCustomSelectionModelImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreUtil.html" data-type="entity-link">StoreUtil</a>
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
                                    <a href="injectables/CustomOverlayContainer.html" data-type="entity-link">CustomOverlayContainer</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CleanEmptyPropertiesConfig.html" data-type="entity-link">CleanEmptyPropertiesConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgplDatatableBase.html" data-type="entity-link">NgplDatatableBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgplFilterAppliedBase.html" data-type="entity-link">NgplFilterAppliedBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgplFilterBase.html" data-type="entity-link">NgplFilterBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgplFilterConfigValue.html" data-type="entity-link">NgplFilterConfigValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgplFilterMenuBase.html" data-type="entity-link">NgplFilterMenuBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Object.html" data-type="entity-link">Object</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/String.html" data-type="entity-link">String</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StringConstructor.html" data-type="entity-link">StringConstructor</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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