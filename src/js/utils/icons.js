const windIcon = (deg) => {
  switch (true) {
    case deg >= 313:
      return 313;
    case deg >= 293:
      return 293;
    case deg >= 270:
      return 270;
    case deg >= 248:
      return 248;
    case deg >= 225:
      return 225;
    case deg >= 203:
      return 203;
    case deg >= 180:
      return 180;
    case deg >= 158:
      return 158;
    case deg >= 135:
      return 135;
    case deg >= 113:
      return 113;
    case deg >= 90:
      return 90;
    case deg >= 68:
      return 68;
    case deg >= 45:
      return 45;
    case deg >= 23:
      return 23;
    default:
      return 0;
  }
};

module.exports = { windIcon };
