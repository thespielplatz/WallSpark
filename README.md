# WallSpark

[![MIT License Badge](docs/img/license-badge.svg)](LICENSE)

WallSpark is a tool for controlling and animating wall-mounted pixel displays, built with Vue3 and Nuxt, and designed to seamlessly control [WLED](https://kno.wled.ge/). With a user-friendly interface, it allows real-time creation, customization, and animation of pixel art.

## Roadmap

- **Milestone lab10** - Display the time & add a background image
- **Milestone BlockClock** - Add the same functionality of BlockClock code of [BlockClock Repo](https://github.com/thespielplatz/tspi-blockclock)
- **Milestone Web UI** - t.b.d.

Too see the full roadmap or the milestones more in detail --> [Roadmap page](https://thespielplatz.notion.site/Wall-Spark-Roadmap-11a5896652c4805589b2e5b6cde2bb28) (*Single source of truth*).

## How to run

*This section is a first draft, because "how to run" was not thought yet.*


- Setup you display with [WLED](https://kno.wled.ge/) and connect it to the same wifi
- install npm
- install lts of node

```bash
git clone git@github.com:thespielplatz/WallSpark.git
npm i
cp config.json.example config.json
```

- Change the `host` in `config.json` with the ip address of your wled display.

```bash
npm run script
```

## Support

If you like this project, give it a star! If you love it, fork it and take it out for dinner. 🌟🍽️ And hey, why not [send some tip love?](https://thespielplatz.com/tip-jar)
