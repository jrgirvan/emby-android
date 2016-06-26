define(["browser"],function(e){function o(){var e=document.createElement("video");return!(!e.canPlayType||!e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""))}function i(){return null==p&&(p=null!=document.createElement("video").textTracks),p}function n(){return null==l&&(l=a()||t()),l}function a(){var e=document.createElement("video");return e.canPlayType("application/x-mpegURL").replace(/no/,"")||e.canPlayType("application/vnd.apple.mpegURL").replace(/no/,"")?!0:!1}function t(){return null==window.MediaSource||e.firefox?!1:!0}function r(o){var i;if("flac"==o){if(e.tizen)return!0}else if("wma"==o){if(e.tizen)return!0}else if("opus"==o)return i='audio/ogg; codecs="opus"',document.createElement("audio").canPlayType(i).replace(/no/,"")?!0:!1;return i="webma"==o?"audio/webm":"audio/"+o,document.createElement("audio").canPlayType(i).replace(/no/,"")?!0:!1}function s(){if(e.chrome){var o=navigator.userAgent.toLowerCase();return e.operaTv?!1:-1!=o.indexOf("vivaldi")||-1!=o.indexOf("opera")?!1:!0}return e.tizen?!0:!1}function c(){return e.tizen||e.web0s}function d(o){var i=!1;switch(o){case"3gp":case"avi":case"asf":case"flv":case"mpg":case"mpeg":case"mts":case"trp":case"vob":case"vro":i=e.tizen;break;case"m2ts":case"wmv":i=e.tizen||e.web0s;break;case"ts":if(i=e.tizen||e.web0s)return{Container:"ts,mpegts",Type:"Video"}}return i?{Container:o,Type:"Video"}:null}function u(){if(e.xboxOne)return 1e7;navigator.userAgent.toLowerCase();return e.tizen?1e7:1e8}var p,l;return function(a){a=a||{};var t=a.audioChannels||2,p=u(),l=document.createElement("video"),m=l.canPlayType("video/webm").replace(/no/,""),C=s(),f=c(),h={};h.MaxStreamingBitrate=p,h.MaxStaticBitrate=1e8,h.MusicStreamingTranscodingBitrate=Math.min(p,192e3),h.DirectPlayProfiles=[];var y=[],P=[],T=l.canPlayType('video/mp4; codecs="avc1.640029, mp4a.69"').replace(/no/,"")||l.canPlayType('video/mp4; codecs="avc1.640029, mp4a.6B"').replace(/no/,"");l.canPlayType('audio/mp4; codecs="ac-3"').replace(/no/,"")&&(e.safari||(y.push("ac3"),e.edge&&e.mobile||P.push("ac3")));var v=!1;(C||f)&&T&&(v=!0,y.push("mp3"),P.push("mp3")),l.canPlayType('video/mp4; codecs="avc1.640029, mp4a.40.2"').replace(/no/,"")&&(y.push("aac"),P.push("aac")),!v&&T&&(y.push("mp3"),P.push("mp3")),o()&&h.DirectPlayProfiles.push({Container:"mp4,m4v",Type:"Video",VideoCodec:"h264",AudioCodec:y.join(",")}),C&&h.DirectPlayProfiles.push({Container:"mkv,mov",Type:"Video",VideoCodec:"h264",AudioCodec:y.join(",")}),["m2ts","wmv","ts"].map(d).filter(function(e){return null!=e}).forEach(function(e){h.DirectPlayProfiles.push(e)}),["opus","mp3","aac","flac","webma","wma"].filter(r).forEach(function(e){h.DirectPlayProfiles.push({Container:"webma"==e?"webma,webm":e,Type:"Audio"}),"aac"==e&&h.DirectPlayProfiles.push({Container:"m4a",AudioCodec:e,Type:"Audio"})}),m&&h.DirectPlayProfiles.push({Container:"webm",Type:"Video"}),h.TranscodingProfiles=[],["opus","mp3","aac"].filter(r).forEach(function(e){h.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Streaming",Protocol:"http"}),h.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Static",Protocol:"http"})});var V=!1;e.chrome&&(V=!0),C&&a.supportsCustomSeeking&&!e.tizen&&h.TranscodingProfiles.push({Container:"mkv",Type:"Video",AudioCodec:y.join(","),VideoCodec:"h264",Context:"Streaming",CopyTimestamps:V}),f&&a.supportsCustomSeeking&&!e.tizen&&h.TranscodingProfiles.push({Container:"ts",Type:"Video",AudioCodec:y.join(","),VideoCodec:"h264",Context:"Streaming",CopyTimestamps:V,MaxAudioChannels:t.toString()}),n()&&h.TranscodingProfiles.push({Container:"ts",Type:"Video",AudioCodec:P.join(","),VideoCodec:"h264",Context:"Streaming",Protocol:"hls"}),e.firefox&&h.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:y.join(","),VideoCodec:"h264",Context:"Streaming",Protocol:"http"}),m&&h.TranscodingProfiles.push({Container:"webm",Type:"Video",AudioCodec:"vorbis",VideoCodec:"vpx",Context:"Streaming",Protocol:"http",MaxAudioChannels:t.toString()}),h.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:y.join(","),VideoCodec:"h264",Context:"Streaming",Protocol:"http",MaxAudioChannels:t.toString()}),h.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:y.join(","),VideoCodec:"h264",Context:"Static",Protocol:"http"}),h.ContainerProfiles=[],h.CodecProfiles=[],h.CodecProfiles.push({Type:"Audio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:"2"}]});var g="6";l.canPlayType('video/mp4; codecs="avc1.640029, mp4a.40.5"').replace(/no/,"")||h.CodecProfiles.push({Type:"VideoAudio",Codec:"aac",Conditions:[{Condition:"NotEquals",Property:"AudioProfile",Value:"HE-AAC"},{Condition:"LessThanEqual",Property:"AudioChannels",Value:g},{Condition:"LessThanEqual",Property:"AudioBitrate",Value:"128000"},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),h.CodecProfiles.push({Type:"VideoAudio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:g},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]});var A="41";return e.chrome&&!e.mobile&&(A="51"),h.CodecProfiles.push({Type:"Video",Codec:"h264",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1},{Condition:"EqualsAny",Property:"VideoProfile",Value:"high|main|baseline|constrained baseline"},{Condition:"LessThanEqual",Property:"VideoLevel",Value:A}]}),h.CodecProfiles.push({Type:"Video",Codec:"vpx",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1}]}),h.SubtitleProfiles=[],i()&&h.SubtitleProfiles.push({Format:"vtt",Method:"External"}),h.ResponseProfiles=[],h.ResponseProfiles.push({Type:"Video",Container:"m4v",MimeType:"video/mp4"}),h.ResponseProfiles.push({Type:"Video",Container:"mov",MimeType:"video/webm"}),h}});