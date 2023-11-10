const colorMap = {
  day: {
    1000: 'day', // Sunny
    1003: 'day', // Partly cloudy
    1006: 'day', // Cloudy
    1009: 'gray', // Overcast
    1030: 'day', // Mist
    1063: 'day', // Patchy rain possible
    1066: 'day', // Patchy snow possible
    1069: 'day', // Patchy sleet possible
    1072: 'day', // Patchy freezing drizzle possible
    1087: 'day', // Thundery outbreaks possible
    1114: 'gray', // Blowing snow
    1117: 'gray', // Blizzard
    1135: 'gray', // Fog
    1147: 'gray', // Freezing fog
    1150: 'bad', // Patchy light drizzle
    1153: 'gray', // Light drizzle
    1168: 'gray', // Freezing drizzle
    1171: 'gray', // Heavy freezing drizzle
    1180: 'gray', // Patchy light rain
    1183: 'gray', // Light rain
    1186: 'gray', // Moderate rain at times
    1189: 'gray', // Moderate rain
    1192: 'gray', // Heavy rain at times
    1195: 'gray', // Heavy rain
    1198: 'gray', // Light freezing rain
    1201: 'gray', // Moderate or heavy freezing rain
    1204: 'gray', // Light sleet
    1207: 'gray', // Moderate or heavy sleet
    1210: 'gray', // Patchy light snow
    1213: 'gray', // Light snow
    1216: 'gray', // Patchy moderate snow
    1219: 'gray', // Moderate snow
    1222: 'gray', // Patchy heavy snow
    1225: 'gray', // Heavy snow
    1237: 'gray', // Ice pellets
    1240: 'gray', // Light rain shower
    1243: 'gray', // Moderate or heavy rain shower
    1246: 'gray', // Torrential rain shower
    1249: 'gray', // Light sleet showers
    1252: 'gray', // Moderate or heavy sleet showers
    1255: 'gray', // Light snow showers
    1258: 'gray', // Moderate or heavy snow showers
    1261: 'gray', // Light showers of ice pellets
    1264: 'gray', // Moderate or heavy showers of ice pellets
    1273: 'bad', // Patchy light rain with thunder
    1276: 'bad', // Moderate or heavy rain with thunder
    1279: 'bad', // Patchy light snow with thunder
    1282: 'bad', // Moderate or heavy snow with thunder
  },
  night: {
    1000: 'night', // Clear
    1003: 'night', // Partly cloudy
    1006: 'night', // Cloudy
    1009: 'gray', // Overcast
    1030: 'night', // Mist
    1063: 'night', // Patchy rain possible
    1066: 'night', // Patchy snow possible
    1069: 'night', // Patchy sleet possible
    1072: 'night', // Patchy freezing drizzle possible
    1087: 'night', // Thundery outbreaks possible
    1114: 'gray', // Blowing snow
    1117: 'gray', // Blizzard
    1135: 'gray', // Fog
    1147: 'gray', // Freezing fog
    1150: 'bad', // Patchy light drizzle
    1153: 'gray', // Light drizzle
    1168: 'gray', // Freezing drizzle
    1171: 'gray', // Heavy freezing drizzle
    1180: 'gray', // Patchy light rain
    1183: 'gray', // Light rain
    1186: 'gray', // Moderate rain at times
    1189: 'gray', // Moderate rain
    1192: 'gray', // Heavy rain at times
    1195: 'gray', // Heavy rain
    1198: 'gray', // Light freezing rain
    1201: 'gray', // Moderate or heavy freezing rain
    1204: 'gray', // Light sleet
    1207: 'gray', // Moderate or heavy sleet
    1210: 'gray', // Patchy light snow
    1213: 'gray', // Light snow
    1216: 'gray', // Patchy moderate snow
    1219: 'gray', // Moderate snow
    1222: 'gray', // Patchy heavy snow
    1225: 'gray', // Heavy snow
    1237: 'gray', // Ice pellets
    1240: 'gray', // Light rain shower
    1243: 'gray', // Moderate or heavy rain shower
    1246: 'gray', // Torrential rain shower
    1249: 'gray', // Light sleet showers
    1252: 'gray', // Moderate or heavy sleet showers
    1255: 'gray', // Light snow showers
    1258: 'gray', // Moderate or heavy snow showers
    1261: 'gray', // Light showers of ice pellets
    1264: 'gray', // Moderate or heavy showers of ice pellets
    1273: 'bad', // Patchy light rain with thunder
    1276: 'bad', // Moderate or heavy rain with thunder
    1279: 'bad', // Patchy light snow with thunder
    1282: 'bad', // Moderate or heavy snow with thunder
  },
};

export default colorMap;
