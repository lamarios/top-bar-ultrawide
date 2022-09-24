const {Meta, St} = imports.gi;

const Main = imports.ui.main;
const GLib = imports.gi.GLib;

const Config = imports.misc.config;
const [major] = Config.PACKAGE_VERSION.split('.');
const shellVersion = Number.parseInt(major);

const ExtensionUtils = imports.misc.extensionUtils;

const MARGIN_TOP = 'margin-top', MARGIN_BOTTOM = 'margin-bottom', MARGIN_RIGHT = 'margin-right',
    MARGIN_LEFT = 'margin-left', BORDER_RADIUS_TOP_LEFT = 'border-radius-top-left',
    BORDER_RADIUS_TOP_RIGHT = 'border-radius-top-right', BORDER_RADIUS_BOTTOM_RIGHT = 'border-radius-bottom-right',
    BORDER_RADIUS_BOTTOM_LEFT = 'border-radius-bottom-left';

/**
 * https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 * https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
 */
window.setTimeout = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

window.clearTimeout = GLib.source_remove;

class Extension {
    constructor() {
/*
        this._settingChangeDebounce = null;
        this._actorSignalIds = null;
        this._previousStyle = Main.panel.get_style() || '';
        this._panelBox = Main.layoutManager.panelBox;
*/
    }

    enable() {
/*
        this._settings = ExtensionUtils.getSettings('com.ftpix.topbarposition');
        this._settings.connect('changed', this._settingsChanged.bind(this));

        this._actorSignalIds = new Map();
        this._windowSignalIds = new Map();

        this._actorSignalIds.set(Main.overview, [Main.overview.connect('showing', this._setPanel.bind(this)), Main.overview.connect('hiding', this._setPanel.bind(this))]);

        this._actorSignalIds.set(Main.sessionMode, [Main.sessionMode.connect('updated', this._setPanel.bind(this))]);

        for (const metaWindowActor of global.get_window_actors()) {
            this._onWindowActorAdded(metaWindowActor.get_parent(), metaWindowActor);
        }

        this._actorSignalIds.set(global.window_group, [global.window_group.connect('actor-added', this._onWindowActorAdded.bind(this)), global.window_group.connect('actor-removed', this._onWindowActorRemoved.bind(this))]);

        this._actorSignalIds.set(global.window_manager, [global.window_manager.connect('switch-workspace', this._setPanel.bind(this))]);
        this._setPanel();

        print('PANEL BOX' + this._panelBox);
*/
    }

/*
    _getIntSettings(settingName) {
        return this._settings.get_int(settingName);
    }

    _onWindowActorAdded(container, metaWindowActor) {
        this._windowSignalIds.set(metaWindowActor, [metaWindowActor.connect('notify::allocation', this._setPanel.bind(this)), metaWindowActor.connect('notify::visible', this._setPanel.bind(this))]);
    }

    _onWindowActorRemoved(container, metaWindowActor) {
        for (const signalId of this._windowSignalIds.get(metaWindowActor)) {
            metaWindowActor.disconnect(signalId);
        }
        this._windowSignalIds.delete(metaWindowActor);
        this._setPanel();
    }

    _setPanel() {
        print('SETTING PANEL');
        const left = this._getIntSettings(MARGIN_LEFT);
        const right = this._getIntSettings(MARGIN_RIGHT);
        const top = this._getIntSettings(MARGIN_TOP);
        const bottom = this._getIntSettings(MARGIN_BOTTOM);

        const topRight = this._getIntSettings(BORDER_RADIUS_TOP_RIGHT) + 'px';
        const topLeft = this._getIntSettings(BORDER_RADIUS_TOP_LEFT) + 'px';
        const bottomRight = this._getIntSettings(BORDER_RADIUS_BOTTOM_RIGHT) + 'px';
        const bottomLeft = this._getIntSettings(BORDER_RADIUS_BOTTOM_LEFT) + 'px';
        const borderRadius = 'border-radius: ' + topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft + ';';

        // const style = borderRadius;
        // const currentSize = this._panelBox.get_size();
        Main.panel.set_style(borderRadius);
        // this._panelBox.set_style(style);
        // this._panelBox.set_margin_left(left);
        // this._panelBox.set_size(currentSize[0]-right, currentSize[1]);
        // this._panelBox.set_siw
        // this._panelBox.set_margin_right(right);
        // this._panelBox.set_margin_top(top);
        // Main.panel.set_margin_bottom(bottom);
        print(Main.panel.get_style());
    }

    _settingsChanged(settings, key) {
        clearTimeout(this._settingChangeDebounce);
        this._settingChangeDebounce = setTimeout(() => {
            this._setPanel();
        }, 250);

    }
*/

    disable() {
/*
        for (const actorSignalIds of [this._actorSignalIds, this._windowSignalIds]) {
            for (const [actor, signalIds] of actorSignalIds) {
                for (const signalId of signalIds) {
                    actor.disconnect(signalId);
                }
            }
        }
        this._actorSignalIds = null;
        this._windowSignalIds = null;
        Main.panel.set_style(this._previousStyle);
*/
    }

};

function init() {
    return new Extension();
}
