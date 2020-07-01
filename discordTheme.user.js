// ==UserScript==
// @name         Scratch Discord Theme
// @description  Discord Themed Scratch Editor
// @homepage     https://github.com/CrimsonMaelstrom/scratch-discord-theme/
// @version      1.0
// @author       Crimson Maelstron (but mostly infinitec)
// @match        https://scratch.mit.edu/projects/*
// @match        https://scratch.org/projects/*
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    //All of the hard work for this was stolen be me from infinitytec, I just changed the colors and the way they work a bit
    //Text background: #36393f, Channels background: #2f3136, Server background: #202225
    GM_addStyle(":root {--main-bg: #202225; --secondary-bg: #36393f; --accent: #2f3136; --text: #ffffff;}");
    GM_addStyle(".menu-bar_main-menu_3wjWH, .menu-bar_account-info-group_MeJZP {background: #181818}");
    GM_addStyle(".modal_header_1h7ps, .menu_menu_3k7QT, .project-title-input_title-field_en5Gd:focus {background: var(--accent);}");
    GM_addStyle(".gui_body-wrapper_-N0sA, .blocklySvg {background: var(--main-bg);}");
    GM_addStyle(".blocklyMainBackground{fill: var(--secondary-bg) !important;}");
    GM_addStyle(".context-menu_context-menu_2SJM-, .blocklyWidgetDiv .goog-menu, .Popover-body {background: var(--accent) !important; color: var(--text) !important; border: 1px solid white;} .goog-menuitem-content, .color-picker_row-header_173LQ {color: var(--text);} /*Highlight*/ .blocklyWidgetDiv .goog-menuitem-highlight, .blocklyWidgetDiv .goog-menuitem-hover, .context-menu_menu-item_3cioN:hover {background-color:#ffffff33 !important;}");
    GM_addStyle(".blocklyFlyoutBackground {fill: var(--accent) !important;}");
    GM_addStyle(".blocklyFlyoutLabelText{fill: var(--text) !important;}");
    GM_addStyle(".connection-modal_bottom-area_AHeQ3, .connection-modal_body_3YO9j, .blocklyToolboxDiv, .scratchCategoryMenu {background: var(--accent); color: var(--text);}");
    GM_addStyle(".scratchCategoryMenuItem.categorySelected {background: #ffffff22;}");
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX, .stage-selector_stage-selector_3oWOr, .stage-selector_label_1MCfr, .stage-selector_count_2QK7D {background: var(--accent); color: var(--text);}");
    GM_addStyle(".sprite-info_sprite-info_3EyZh, .stage-selector_header_2GVr1, .stage-selector_header-title_33xCt, .stage-selector_header-title_33xCt, .sprite-selector-item_sprite-selector-item_kQm-i:hover {background: var(--secondary-bg); color: var(--text);}");
    GM_addStyle(".blocklyFlyoutButtonBackground {fill: var(--accent) !important;}.blocklyFlyoutButtonBackground:hover, .blocklyFlyoutButton:hover {fill: var(--accent) !important; filter: brightness(110%) !important;}");
    GM_addStyle("blocklyFlyoutButton > text.blocklyText {fill: var(--text) !important;}");
    GM_addStyle(".blocklyFlyoutButton .blocklyText {fill: var(--text) !important;");
    GM_addStyle(".backpack_backpack-header_6ltCS {background: var(--accent); color: var(--text);}");
    GM_addStyle(".backpack_backpack-list-inner_10a2A {background: var(--secondary-bg);} .backpack_backpack-item_hwqzQ, .sprite-selector-item_sprite-image-outer_Xs0wN, .backpack_backpack-item_hwqzQ > div {background: var(--main-bg); border-radius: 0.5rem 0.5rem 0 0;} .backpack_backpack-item_hwqzQ img {mix-blend-mode: normal;}");
    GM_addStyle(".selector_list-area_1Xbj_{background: var(--accent);} .selector_new-buttons_2qHDd::before {background: none;}");
    GM_addStyle(".asset-panel_wrapper_366X0{background: var(--secondary-bg); color: var(--text);} .sound-editor_effect-button_2zuzT, .sound-editor_trim-button_lSENI {color: var(--text);}");
    GM_addStyle("img.tool-select-base_tool-select-icon_tJ-rr, .sound-editor_trim-button_lSENI{filter: brightness(2);}");
    GM_addStyle(".selector_list-item_3N_u7, .sprite-selector-item_sprite-name_1PXjh, .sprite-selector-item_sprite-details_2UVpA {color: var(--text);}");
    GM_addStyle(".gui_tab_27Unf.gui_is-selected_sHAiu{background: var(--accent); color: var(--text);}.gui_tab_27Unf{background: var(--secondary-bg); color: var(--text);} .gui_tab_27Unf:hover{background: var(--accent); filter: brightness(90%); color: var(--text);}");
    GM_addStyle(".prompt_body_18Z-I, .custom-procedures_body_SQBv6, div.custom-procedures_option-card_BtHt3 {background: var(--accent); color: var(--text);} .custom-procedures_button-row_2jBu3 > button:nth-child(1), .prompt_button-row_3Wc5Z > button:nth-child(1),.prompt_button-row_3Wc5Z > button:nth-child(1) {background: #ff3a5b;}");
    GM_addStyle(".stage_stage-wrapper-overlay_fmZuD, .stage-header_stage-header-wrapper-overlay_5vfJa{background: black;} .stage_stage-overlay-content_ePv_6 {border: none;} ");
    GM_addStyle(".library_library-scroll-grid_1jyXm, .modal_modal-content_1h3ll.modal_full-screen_FA4cr {background: var(--accent); color: var(--text);} ");
    GM_addStyle(" .library-item_library-item-extension_3xus9, .library-item_library-item_1DcMO, .library_filter-bar_1W0DW {background: var(--accent);} .library-item_library-item-extension_3xus9 span, .library-item_featured-extension-metadata_3D8E8, .library-item_library-item-name_2qMXu {color: var(--text) !important;}");
    GM_addStyle("input[type=text], .input_input-form_1Y0wX, .prompt_variable-name-text-input_1iu8- {background: var(--accent); color: var(--text) !important;} input[type=text]:hover, input[type=text]:focus {background: var(--accent); filter: brightness(90%);}");
    GM_addStyle(".blocklyZoom,  .stage-header_stage-button_hkl9B, .sound-editor_round-button_3NLcW, .sound-editor_button-group_SFPoV {filter: invert(100) hue-rotate(180deg);}");
    GM_addStyle(".sprite-selector-item_is-selected_24tQj {background:transparent !important;}");
    GM_addStyle(".paint-editor_canvas-container_x2D0a {border: 1px solid var(--accent); overflow: hidden; }");
    GM_addStyle(".filter_filter_1JFal{background: var(--secondary-bg); overflow: hidden;} .filter_filter-input_1iiEt::placeholder{color: var(--text);}");
    GM_addStyle(".paint-editor_button-group-button-icon_10kVn, .color-picker_swatch-icon_Z7osI, .scratchCategoryId-music > .scratchCategoryItemIcon {filter: brightness(100);}");
    GM_addStyle(".paper-canvas_paper-canvas_1y588 {background-color: var(--secondary-bg); border-radius: .4rem;} .paint-editor_canvas-container_x2D0a {border: 2px solid var(--accent); border-radius: .4rem; }");
    GM_addStyle(" path.blocklyBlockBackground[stroke='#FF3355'], .blocklyBlockBackground[stroke='#FF3355']{fill:#6d30a4 !important; stroke: #8a55d7 !important; stroke-width: 1px;} g[data-shapes='argument round'] > path.blocklyPath[fill='#FF6680']{fill: #6d30a4 !important;} path.blocklyPath[fill='#FF3355'][data-argument-type='boolean']{fill: #8357AC !important;}");
    GM_addStyle("g[data-category=motion] > path.blocklyBlockBackground{fill:#4a6cd4;}.blocklyDropDownDiv[data-category=motion]{background:#4a6cd4 !important;}");
    GM_addStyle("g[data-category=looks] > path.blocklyBlockBackground{fill:#8a55d7;}.blocklyDropDownDiv[data-category=looks]{background:#8a55d7 !important;}");
    GM_addStyle("g[data-category=sounds] > path.blocklyBlockBackground,g[data-category=Music] > path.blocklyBlockBackground, g[data-category=Music] > g[data-shapes=round] > path.blocklyPath.blocklyBlockBackground {fill:#bb42c3; stroke:#99489e !important;}.blocklyDropDownDiv[data-category=sounds], .blocklyDropDownDiv[data-category=Music]{background:#bb42c3 !important; border-color: #99489e !important;} line[stroke='#0DA57A'] {stroke: white !important;} path[stroke='#0B8E69']:not(g[data-category='Pen'] > path.blocklyBlockBackground){stroke: #99489e !important;}");
    GM_addStyle("g[data-category=events] > path.blocklyBlockBackground, .blocklyPath[fill='#FFBF00']{fill:#c88330;}.blocklyDropDownDiv[data-category=events], .blocklyPath[fill='#FFBF00'].blocklyDropDownDiv[data-category=events] /*Commented out for now, as this causes some issues ,.blocklyDropDownDiv[data-category=null]*/{background:#c88330 !important;}");
    GM_addStyle("g[data-category=control] > path.blocklyBlockBackground{fill:#e1a91a;}.blocklyDropDownDiv[data-category=control]{background:#e1a91a !important;}");
    GM_addStyle("g[data-category=sensing] > path.blocklyBlockBackground, .blocklyPath[fill='#5CB1D6'] {fill:#2ca5e2;}.blocklyDropDownDiv[data-category=sensing]{background:#2ca5e2 !important;}");
    GM_addStyle("g[data-category=operators] > path.blocklyBlockBackground{fill:#5cb712;}.blocklyDropDownDiv[data-category=operators]{background:#5cb712 !important;}");
    GM_addStyle("g[data-category=Pen] > path.blocklyBlockBackground{fill:#00a375; stroke: #009365}.blocklyDropDownDiv[data-category=Pen]{background:#00a375 !important;}");
    GM_addStyle("g[data-category=data] > path.blocklyBlockBackground{fill:#ee7d16;}.blocklyDropDownDiv[data-category=data]{background:#ee7d16 !important;}");
    GM_addStyle("g[data-category=data-lists] > path.blocklyBlockBackground{fill:#d36518;}.blocklyDropDownDiv[data-category=data-lists]{background:#d36518 !important;}");
    GM_addStyle("g[data-shapes='argument round']path.blocklyBlockBackground, path[fill='#ffffff']{fill: white; stroke-width: 1px;}");
    GM_addStyle("g[data-argument-type='dropdown'] path.blocklyBlockBackground, g[data-argument-type='variable'] path.blocklyBlockBackground, rect.blocklyBlockBackground{fill: #55555555;}");
    GM_addStyle("g[data-argument-type='colour']path.blocklyBlockBackground{fill: initial;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(1) > div:nth-child(1) > div:nth-child(1) {background: #4a6cd4 !important; border-color: #4e64aa !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(2) > div:nth-child(1) > div:nth-child(1) {background: #8a55d7 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(3) > div:nth-child(1) > div:nth-child(1) {background: #bb42c3 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(4) > div:nth-child(1) > div:nth-child(1) {background: #c88330 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(5) > div:nth-child(1) > div:nth-child(1) {background: #e1a91a !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(6) > div:nth-child(1) > div:nth-child(1) {background: #2ca5e2 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(7) > div:nth-child(1) > div:nth-child(1) {background: #5cb712 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(8) > div:nth-child(1) > div:nth-child(1) {background: #ee7d16 !important;}");
    GM_addStyle("div.scratchCategoryMenuRow:nth-child(9) > div:nth-child(1) > div:nth-child(1) {background: #6d30a4 !important; border-color: #a249f3 !important;}");
    GM_addStyle(".removableTextInput, .blocklyWidgetDiv, .fieldTextInput {border-color: #ffffff66;");
    GM_addStyle(".valueReportBox{color: #bfbfbf;}");
    GM_addStyle(".blocklyWidgetDiv .fieldTextInput {border-color: #55555555;} g[data-shapes='argument round'] > .blocklyPath[stroke='#FF3355']{fill: white !important;}");
    GM_addStyle("g[data-argument-type='dropdown'] path.blocklyBlockBackground, g[data-shapes='argument round'] > .blocklyPath.blocklyBlockBackground {stroke: #55555555;} ");
})();
