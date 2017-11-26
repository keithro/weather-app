
const createIcon = (data) => {
  let icon = '<i class="wi wi-owm-';
  if ([781, 804, 901, 905].indexOf(data.id) < 0) {
    if (data.icon.includes('n')) {
      icon += 'night-';
    } else if (data.icon.includes('d')) {
      icon += 'day-';
    } else {
      icon += '';
    }
  }
  icon += `${data.id}"></i>`;
  return icon;
};

const windIcon = (deg) => {
  switch (true) {
    case deg >= 313:
      return 313;
      break;
    case deg >= 293:
      return 293;
      break;
    case deg >= 270:
      return 270;
      break;
    case deg >= 248:
      return 248;
      break;
    case deg >= 225:
      return 225;
      break;
    case deg >= 203:
      return 203;
      break;
    case deg >= 180:
      return 180;
      break;
    case deg >= 158:
      return 158;
      break;
    case deg >= 135:
      return 135;
      break;
    case deg >= 113:
      return 113;
      break;
    case deg >= 90:
      return 90;
      break;
    case deg >= 68:
      return 68;
      break;
    case deg >= 45:
      return 45;
      break;
    case deg >= 23:
      return 23;
      break;
    default:
      return 0;
  }
};

module.exports = { createIcon, windIcon };
