const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const ExtensionUtils = imports.misc.extensionUtils;

const MARGIN_TOP = 'margin-top',
    MARGIN_BOTTOM = 'margin-bottom',
    MARGIN_RIGHT = 'margin-right',
    MARGIN_LEFT = 'margin-left',
    BORDER_RADIUS_TOP_LEFT = 'border-radius-top-left',
    BORDER_RADIUS_TOP_RIGHT = 'border-radius-top-right',
    BORDER_RADIUS_BOTTOM_RIGHT = 'border-radius-bottom-right',
    BORDER_RADIUS_BOTTOM_LEFT = 'border-radius-bottom-left';

const PrefsWidget = GObject.registerClass({
    GTypeName: 'TopBarPositionPrefsWidget',
    Template: Me.dir.get_child('prefs.gtk4.ui').get_uri(),
    InternalChildren: [
        'mTop', 'mBottom', 'mRight', 'mLeft',
        'bTopLeft', 'bTopRight', 'bBottomLeft', 'bBottomRight'
    ]
}, class TopBarPositionPrefsWidget extends Gtk.Box {

    _init(params = {}) {
        super._init(params);
        this.settings = ExtensionUtils.getSettings('com.ftpix.topbarposition');
        this._mTop.set_value(this.getIntSettings(MARGIN_TOP));
        this._mBottom.set_value(this.getIntSettings(MARGIN_BOTTOM));
        this._mRight.set_value(this.getIntSettings(MARGIN_RIGHT));
        this._mLeft.set_value(this.getIntSettings(MARGIN_LEFT));
        this._bTopLeft.set_value(this.getIntSettings(BORDER_RADIUS_TOP_LEFT));
        this._bTopRight.set_value(this.getIntSettings(BORDER_RADIUS_TOP_RIGHT));
        this._bBottomLeft.set_value(this.getIntSettings(BORDER_RADIUS_BOTTOM_LEFT));
        this._bBottomRight.set_value(this.getIntSettings(BORDER_RADIUS_BOTTOM_RIGHT));

    }

    setIntSettings(settingName, value) {
        print('setting '+settingName+ ' to '+value);
        this.settings.set_int(settingName, value);
    }

    getIntSettings(settingName) {
        return this.settings.get_int(settingName);
    }

    /*  onValueChanged(scale) {
          this.settings.set_int("transparency", this._opacity.get_value());
      }
 */

    onMarginTopChanged(value) {
        this.setIntSettings(MARGIN_TOP, this._mTop.get_value());
    }

    onMarginRightChanged(value) {
        this.setIntSettings(MARGIN_RIGHT, this._mRight.get_value());
    }

    onMarginBottomChanged(value) {
        this.setIntSettings(MARGIN_BOTTOM, this._mBottom.get_value());
    }

    onMarginLeftChanged(value) {
        this.setIntSettings(MARGIN_LEFT, this._mLeft.get_value());
    }

    onBorderRadiusTopLeftChanged(value) {
        this.setIntSettings(BORDER_RADIUS_TOP_LEFT, this._bTopLeft.get_value());
    }

    onBorderRadiusTopRightChanged(value) {
        this.setIntSettings(BORDER_RADIUS_TOP_RIGHT, this._bTopRight.get_value());
    }

    onBorderRadiusBottomRightChanged(value) {
        this.setIntSettings(BORDER_RADIUS_BOTTOM_RIGHT, this._bBottomRight.get_value());
    }

    onBorderRadiusBottomLeftChanged(value) {
        this.setIntSettings(BORDER_RADIUS_BOTTOM_LEFT, this._bBottomLeft.get_value());
    }
});

function init() {
}

function buildPrefsWidget() {
    return new PrefsWidget();
}
