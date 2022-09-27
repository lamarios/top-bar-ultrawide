# GNOME Shell Extension - Top Bar Ultrawide
Gnome shell extention that applies simple CSS to the top bar, primarily to make it shorter for ultrawide monitor.



## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.

## Install

Due to my poor skill with gjs and extensions in general it's a bit hard to use, I'll try to make it as a proper shell extension but for the teime being follow:

Clone the repo
```
git clone https://github.com/lamarios/top-bar-ultrawide.git
cd top-bar-ultrawide
```

Edit the file in *src/stylesheet.css*
the margin follows the order: top right bottom left
the border radius order: top-left top-right bottom-right bottom-left

then install the extension:
```
make install
```



## Development

### Wayland

Start child shell instance with reloaded extensions
```
MUTTER_DEBUG_DUMMY_MODE_SPECS=1920x1080 dbus-run-session -- gnome-shell --nested --wayland
```

### Xorg

Reload shell by pressing ALT+F2 type r in the input then enter.

### Compile schemas
```
cd ~/.local/share/gnome-shell/extensions/top-bar-ultrawide@ftpix.com
glib-compile-schemas schemas/
```

