// Div classes: search, buttons, images
// hints: q, limit, rating
// Exemplar: https://api.giphy.com/v1/gifs/search?api_key=0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK&q=test&limit=10&offset=0&rating=G&lang=en
// API Key = 0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK

// Globals
var topics = ['guitar', 'synthesizer', 'clarinet', 'violin', 'flute', 'tabla', 'lute', 'cello', 'drums', 'bass'];
var apiKey = "0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK";

var JSON = 
{
    "data":
    [
        {
            "type": "gif",
            "id": "11GXGSzhpwWuE8",
            "slug": "comedy-the-movie-top-secret-11GXGSzhpwWuE8",
            "url": "https://giphy.com/gifs/comedy-the-movie-top-secret-11GXGSzhpwWuE8",
            "bitly_gif_url": "https://gph.is/1WAiEMD",
            "bitly_url": "https://gph.is/1WAiEMD",
            "embed_url": "https://giphy.com/embed/11GXGSzhpwWuE8",
            "username": "",
            "source": "https://giantmonster.tumblr.com/post/139887913388",
            "rating": "g",
            "content_url": "",
            "source_tld": "giantmonster.tumblr.com",
            "source_post_url": "https://giantmonster.tumblr.com/post/139887913388",
            "is_sticker": 0,
            "import_datetime": "2016-05-01 17:24:01",
            "trending_datetime": "2016-05-02 04:15:02",
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200_s.gif",
                    "width": "357",
                    "height": "200"
                },
                "original_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy_s.gif",
                    "width": "450",
                    "height": "252"
                },
                "fixed_width":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w.gif",
                    "width": "200",
                    "height": "112",
                    "size": "318872",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w.mp4",
                    "mp4_size": "31863",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w.webp",
                    "webp_size": "164346"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100_s.gif",
                    "width": "179",
                    "height": "100"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200_d.gif",
                    "width": "357",
                    "height": "200",
                    "size": "241537",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200_d.webp",
                    "webp_size": "97560"
                },
                "preview":
                {
                    "width": "208",
                    "height": "116",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-preview.mp4",
                    "mp4_size": "37729"
                },
                "fixed_height_small":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100.gif",
                    "width": "179",
                    "height": "100",
                    "size": "258878",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100.mp4",
                    "mp4_size": "27144",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100.webp",
                    "webp_size": "142002"
                },
                "downsized_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-downsized_s.gif",
                    "width": "450",
                    "height": "252",
                    "size": "52414"
                },
                "downsized":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-downsized.gif",
                    "width": "450",
                    "height": "252",
                    "size": "1260213"
                },
                "downsized_large":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.gif",
                    "width": "450",
                    "height": "252",
                    "size": "1260213"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100w_s.gif",
                    "width": "100",
                    "height": "56"
                },
                "preview_webp":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-preview.webp",
                    "width": "163",
                    "height": "91",
                    "size": "49284"
                },
                "fixed_width_still":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w_s.gif",
                    "width": "200",
                    "height": "112"
                },
                "fixed_width_small":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100w.gif",
                    "width": "100",
                    "height": "56",
                    "size": "89207",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100w.mp4",
                    "mp4_size": "11976",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/100w.webp",
                    "webp_size": "58006"
                },
                "downsized_small":
                {
                    "width": "450",
                    "height": "252",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-downsized-small.mp4",
                    "mp4_size": "146482"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w_d.gif",
                    "width": "200",
                    "height": "112",
                    "size": "84785",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200w_d.webp",
                    "webp_size": "39498"
                },
                "downsized_medium":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.gif",
                    "width": "450",
                    "height": "252",
                    "size": "1260213"
                },
                "original":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.gif",
                    "width": "450",
                    "height": "252",
                    "size": "1260213",
                    "frames": "25",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.mp4",
                    "mp4_size": "116946",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.webp",
                    "webp_size": "638780"
                },
                "fixed_height":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200.gif",
                    "width": "357",
                    "height": "200",
                    "size": "930125",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200.mp4",
                    "mp4_size": "69049",
                    "webp": "https://media1.giphy.com/media/11GXGSzhpwWuE8/200.webp",
                    "webp_size": "410420"
                },
                "looping":
                {
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-loop.mp4",
                    "mp4_size": "927881"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "268",
                    "mp4": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy.mp4",
                    "mp4_size": "116946"
                },
                "preview_gif":
                {
                    "url": "https://media1.giphy.com/media/11GXGSzhpwWuE8/giphy-preview.gif",
                    "width": "116",
                    "height": "65",
                    "size": "47260"
                },
                "480w_still":
                {
                    "url": "https://media0.giphy.com/media/11GXGSzhpwWuE8/480w_s.jpg",
                    "width": "480",
                    "height": "269"
                }
            },
            "title": "old man cello GIF",
            "_score": 2500020.2,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=11GXGSzhpwWuE8&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=11GXGSzhpwWuE8&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=11GXGSzhpwWuE8&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "piKaO6KOsO7ArDuiul",
            "slug": "wontyoubemyneighbor-mr-rogers-wont-you-be-my-neighbor-piKaO6KOsO7ArDuiul",
            "url": "https://giphy.com/gifs/wontyoubemyneighbor-mr-rogers-wont-you-be-my-neighbor-piKaO6KOsO7ArDuiul",
            "bitly_gif_url": "https://gph.is/2ptzlyv",
            "bitly_url": "https://gph.is/2ptzlyv",
            "embed_url": "https://giphy.com/embed/piKaO6KOsO7ArDuiul",
            "username": "wontyoubemyneighbor",
            "source": "https://www.youtube.com/watch?v=FhwktRDG_aQ",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.youtube.com",
            "source_post_url": "https://www.youtube.com/watch?v=FhwktRDG_aQ",
            "is_sticker": 0,
            "import_datetime": "2018-03-21 20:08:15",
            "trending_datetime": "1970-01-01 00:00:00",
            "user":
            {
                "avatar_url": "https://media2.giphy.com/avatars/wontyoubemyneighbor/zN8ApCmujThs.png",
                "banner_url": "",
                "profile_url": "https://giphy.com/wontyoubemyneighbor/",
                "username": "wontyoubemyneighbor",
                "display_name": "Won't You Be My Neighbor",
                "is_verified": true
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200_s.gif",
                    "width": "356",
                    "height": "200",
                    "size": "25935"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy_s.gif",
                    "width": "480",
                    "height": "270",
                    "size": "58980"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w.gif",
                    "width": "200",
                    "height": "113",
                    "size": "107699",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w.mp4",
                    "mp4_size": "21815",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w.webp",
                    "webp_size": "47170"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100_s.gif",
                    "width": "178",
                    "height": "100",
                    "size": "10013"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200_d.gif",
                    "width": "356",
                    "height": "200",
                    "size": "166998",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200_d.webp",
                    "webp_size": "84106"
                },
                "preview":
                {
                    "width": "380",
                    "height": "214",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-preview.mp4",
                    "mp4_size": "25893"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100.gif",
                    "width": "178",
                    "height": "100",
                    "size": "89817",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100.mp4",
                    "mp4_size": "19500",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100.webp",
                    "webp_size": "42470"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy_s.gif",
                    "width": "480",
                    "height": "270",
                    "size": "58980"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "599758"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "599758"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100w_s.gif",
                    "width": "100",
                    "height": "57",
                    "size": "4087"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-preview.webp",
                    "width": "242",
                    "height": "136",
                    "size": "44340"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w_s.gif",
                    "width": "200",
                    "height": "113",
                    "size": "13022"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100w.gif",
                    "width": "100",
                    "height": "57",
                    "size": "35004",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100w.mp4",
                    "mp4_size": "9010",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/100w.webp",
                    "webp_size": "19210"
                },
                "downsized_small":
                {
                    "width": "480",
                    "height": "270",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-downsized-small.mp4",
                    "mp4_size": "78629"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w_d.gif",
                    "width": "200",
                    "height": "113",
                    "size": "58981",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200w_d.webp",
                    "webp_size": "35026"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "599758"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "599758",
                    "frames": "11",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.mp4",
                    "mp4_size": "78629",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.webp",
                    "webp_size": "115430",
                    "hash": "6ca5877eac550ee370b080387dd90175"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200.gif",
                    "width": "356",
                    "height": "200",
                    "size": "275426",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200.mp4",
                    "mp4_size": "48605",
                    "webp": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/200.webp",
                    "webp_size": "89740"
                },
                "hd":
                {
                    "width": "1920",
                    "height": "1080",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-hd.mp4",
                    "mp4_size": "636941"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-loop.mp4",
                    "mp4_size": "1430004"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "270",
                    "mp4": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy.mp4",
                    "mp4_size": "78629"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/piKaO6KOsO7ArDuiul/giphy-preview.gif",
                    "width": "167",
                    "height": "94",
                    "size": "49348"
                },
                "480w_still":
                {
                    "url": "https://media2.giphy.com/media/piKaO6KOsO7ArDuiul/480w_s.jpg",
                    "width": "480",
                    "height": "270"
                }
            },
            "title": "mr rogers cello GIF by Won't You Be My Neighbor",
            "_score": 2300012.8,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=piKaO6KOsO7ArDuiul&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=piKaO6KOsO7ArDuiul&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=piKaO6KOsO7ArDuiul&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "FmT9hXzddXhO8",
            "slug": "dracula-frankenstein-various-tv-halloween-FmT9hXzddXhO8",
            "url": "https://giphy.com/gifs/dracula-frankenstein-various-tv-halloween-FmT9hXzddXhO8",
            "bitly_gif_url": "https://gph.is/Hz0Jm9",
            "bitly_url": "https://gph.is/Hz0Jm9",
            "embed_url": "https://giphy.com/embed/FmT9hXzddXhO8",
            "username": "",
            "source": "https://rhetthammersmithhorror.tumblr.com/post/63476640848/monster-squad-76-imdb",
            "rating": "g",
            "content_url": "",
            "source_tld": "rhetthammersmithhorror.tumblr.com",
            "source_post_url": "https://rhetthammersmithhorror.tumblr.com/post/63476640848/monster-squad-76-imdb",
            "is_sticker": 0,
            "import_datetime": "2013-10-14 02:11:03",
            "trending_datetime": "2014-10-15 13:51:26",
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200_s.gif",
                    "width": "281",
                    "height": "200"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy_s.gif",
                    "width": "500",
                    "height": "356"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w.gif",
                    "width": "200",
                    "height": "142",
                    "size": "46876",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w.mp4",
                    "mp4_size": "19262",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w.webp",
                    "webp_size": "61914"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/100_s.gif",
                    "width": "140",
                    "height": "100"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200_d.gif",
                    "width": "281",
                    "height": "200",
                    "size": "315700",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/200_d.webp",
                    "webp_size": "107504"
                },
                "preview":
                {
                    "width": "398",
                    "height": "282",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-preview.mp4",
                    "mp4_size": "42333"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/100.gif",
                    "width": "140",
                    "height": "100",
                    "size": "85518",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/100.mp4",
                    "mp4_size": "43438",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/100.webp",
                    "webp_size": "32684"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-downsized_s.gif",
                    "width": "500",
                    "height": "356",
                    "size": "136216"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-downsized.gif",
                    "width": "500",
                    "height": "356",
                    "size": "776759"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.gif",
                    "width": "500",
                    "height": "356",
                    "size": "776759"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/100w_s.gif",
                    "width": "100",
                    "height": "71"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-preview.webp",
                    "width": "171",
                    "height": "122",
                    "size": "48766"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w_s.gif",
                    "width": "200",
                    "height": "142"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/100w.gif",
                    "width": "100",
                    "height": "71",
                    "size": "46876",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/100w.mp4",
                    "mp4_size": "27236",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/100w.webp",
                    "webp_size": "19462"
                },
                "downsized_small":
                {
                    "width": "500",
                    "height": "356",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-downsized-small.mp4",
                    "mp4_size": "78302"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w_d.gif",
                    "width": "200",
                    "height": "142",
                    "size": "163909",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/200w_d.webp",
                    "webp_size": "61914"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.gif",
                    "width": "500",
                    "height": "356",
                    "size": "776759"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.gif",
                    "width": "500",
                    "height": "356",
                    "size": "776759",
                    "frames": "6",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.mp4",
                    "mp4_size": "51481",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.webp",
                    "webp_size": "273036"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/200.gif",
                    "width": "281",
                    "height": "200",
                    "size": "85518",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/200.mp4",
                    "mp4_size": "17043",
                    "webp": "https://media0.giphy.com/media/FmT9hXzddXhO8/200.webp",
                    "webp_size": "107504"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-loop.mp4",
                    "mp4_size": "3566143"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "340",
                    "mp4": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy.mp4",
                    "mp4_size": "51481"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/FmT9hXzddXhO8/giphy-preview.gif",
                    "width": "132",
                    "height": "94",
                    "size": "49846"
                },
                "480w_still":
                {
                    "url": "https://media2.giphy.com/media/FmT9hXzddXhO8/480w_s.jpg",
                    "width": "480",
                    "height": "342"
                }
            },
            "title": "saturday morning dracula GIF",
            "_score": 1000020.2,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=FmT9hXzddXhO8&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=FmT9hXzddXhO8&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=FmT9hXzddXhO8&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "NV5raqaUrfb0BIUNKh",
            "slug": "boomerangtoons-boomerang-tom-and-jerry-toons-NV5raqaUrfb0BIUNKh",
            "url": "https://giphy.com/gifs/boomerangtoons-boomerang-tom-and-jerry-toons-NV5raqaUrfb0BIUNKh",
            "bitly_gif_url": "https://gph.is/g/4gD8GAE",
            "bitly_url": "https://gph.is/g/4gD8GAE",
            "embed_url": "https://giphy.com/embed/NV5raqaUrfb0BIUNKh",
            "username": "boomerangtoons",
            "source": "https://watch.boomerang.com/watch/78/26",
            "rating": "g",
            "content_url": "",
            "source_tld": "watch.boomerang.com",
            "source_post_url": "https://watch.boomerang.com/watch/78/26",
            "is_sticker": 0,
            "import_datetime": "2019-02-14 22:25:18",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media0.giphy.com/avatars/boomerangtoons/ZP91dqljlrb2.jpg",
                "banner_url": "https://media0.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
                "banner_image": "https://media0.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
                "profile_url": "https://giphy.com/boomerangtoons/",
                "username": "boomerangtoons",
                "display_name": "Boomerang Official",
                "is_verified": true
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200_s.gif",
                    "width": "274",
                    "height": "200",
                    "size": "25775"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy_s.gif",
                    "width": "450",
                    "height": "328",
                    "size": "64890"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w.gif",
                    "width": "200",
                    "height": "146",
                    "size": "754059",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w.mp4",
                    "mp4_size": "157855",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w.webp",
                    "webp_size": "460668"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100_s.gif",
                    "width": "137",
                    "height": "100",
                    "size": "8821"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200_d.gif",
                    "width": "274",
                    "height": "200",
                    "size": "170446",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200_d.webp",
                    "webp_size": "105750"
                },
                "preview":
                {
                    "width": "148",
                    "height": "108",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-preview.mp4",
                    "mp4_size": "37392"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100.gif",
                    "width": "137",
                    "height": "100",
                    "size": "484344",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100.mp4",
                    "mp4_size": "69333",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100.webp",
                    "webp_size": "231002"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-downsized_s.gif",
                    "width": "327",
                    "height": "238",
                    "size": "31443"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-downsized.gif",
                    "width": "327",
                    "height": "238",
                    "size": "1671494"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.gif",
                    "width": "450",
                    "height": "328",
                    "size": "3421632"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100w_s.gif",
                    "width": "100",
                    "height": "73",
                    "size": "5057"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-preview.webp",
                    "width": "94",
                    "height": "68",
                    "size": "22024"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w_s.gif",
                    "width": "200",
                    "height": "146",
                    "size": "14544"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100w.gif",
                    "width": "100",
                    "height": "73",
                    "size": "229754",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100w.mp4",
                    "mp4_size": "39545",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/100w.webp",
                    "webp_size": "133696"
                },
                "downsized_small":
                {
                    "width": "178",
                    "height": "130",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-downsized-small.mp4",
                    "mp4_size": "61535"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w_d.gif",
                    "width": "200",
                    "height": "146",
                    "size": "107840",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200w_d.webp",
                    "webp_size": "57974"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.gif",
                    "width": "450",
                    "height": "328",
                    "size": "3421632"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.gif",
                    "width": "450",
                    "height": "328",
                    "size": "3421632",
                    "frames": "54",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.mp4",
                    "mp4_size": "2293472",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.webp",
                    "webp_size": "2418474",
                    "hash": "be52259983c970e1300b4cd728d849fa"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200.gif",
                    "width": "274",
                    "height": "200",
                    "size": "1365285",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200.mp4",
                    "mp4_size": "410267",
                    "webp": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/200.webp",
                    "webp_size": "835886"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-loop.mp4",
                    "mp4_size": "7388354"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "348",
                    "mp4": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy.mp4",
                    "mp4_size": "2293472"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/NV5raqaUrfb0BIUNKh/giphy-preview.gif",
                    "width": "115",
                    "height": "84",
                    "size": "47132"
                },
                "480w_still":
                {
                    "url": "https://media1.giphy.com/media/NV5raqaUrfb0BIUNKh/480w_s.jpg",
                    "width": "480",
                    "height": "350"
                }
            },
            "title": "valentines day love GIF by Boomerang Official",
            "_score": 500027.72,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=NV5raqaUrfb0BIUNKh&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=NV5raqaUrfb0BIUNKh&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=NV5raqaUrfb0BIUNKh&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "1nRyaJ7xXJuzHIF7zL",
            "slug": "boomerangtoons-boomerang-tom-and-jerry-toons-1nRyaJ7xXJuzHIF7zL",
            "url": "https://giphy.com/gifs/boomerangtoons-boomerang-tom-and-jerry-toons-1nRyaJ7xXJuzHIF7zL",
            "bitly_gif_url": "https://gph.is/g/4o6xVJZ",
            "bitly_url": "https://gph.is/g/4o6xVJZ",
            "embed_url": "https://giphy.com/embed/1nRyaJ7xXJuzHIF7zL",
            "username": "boomerangtoons",
            "source": "https://watch.boomerang.com/watch/78/26",
            "rating": "g",
            "content_url": "",
            "source_tld": "watch.boomerang.com",
            "source_post_url": "https://watch.boomerang.com/watch/78/26",
            "is_sticker": 0,
            "import_datetime": "2019-02-14 22:25:33",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media0.giphy.com/avatars/boomerangtoons/ZP91dqljlrb2.jpg",
                "banner_url": "https://media0.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
                "banner_image": "https://media0.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
                "profile_url": "https://giphy.com/boomerangtoons/",
                "username": "boomerangtoons",
                "display_name": "Boomerang Official",
                "is_verified": true
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200_s.gif",
                    "width": "274",
                    "height": "200",
                    "size": "27081"
                },
                "original_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy_s.gif",
                    "width": "450",
                    "height": "329",
                    "size": "72195"
                },
                "fixed_width":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w.gif",
                    "width": "200",
                    "height": "146",
                    "size": "659922",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w.mp4",
                    "mp4_size": "155762",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w.webp",
                    "webp_size": "390458"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100_s.gif",
                    "width": "137",
                    "height": "100",
                    "size": "8862"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200_d.gif",
                    "width": "274",
                    "height": "200",
                    "size": "173135",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200_d.webp",
                    "webp_size": "102160"
                },
                "preview":
                {
                    "width": "148",
                    "height": "108",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-preview.mp4",
                    "mp4_size": "34290"
                },
                "fixed_height_small":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100.gif",
                    "width": "137",
                    "height": "100",
                    "size": "377559",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100.mp4",
                    "mp4_size": "69233",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100.webp",
                    "webp_size": "193376"
                },
                "downsized_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-downsized_s.gif",
                    "width": "360",
                    "height": "263",
                    "size": "39662"
                },
                "downsized":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-downsized.gif",
                    "width": "360",
                    "height": "263",
                    "size": "1771101"
                },
                "downsized_large":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.gif",
                    "width": "450",
                    "height": "329",
                    "size": "3229772"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100w_s.gif",
                    "width": "100",
                    "height": "73",
                    "size": "5037"
                },
                "preview_webp":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-preview.webp",
                    "width": "98",
                    "height": "72",
                    "size": "22096"
                },
                "fixed_width_still":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w_s.gif",
                    "width": "200",
                    "height": "146",
                    "size": "15233"
                },
                "fixed_width_small":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100w.gif",
                    "width": "100",
                    "height": "73",
                    "size": "196550",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100w.mp4",
                    "mp4_size": "39853",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/100w.webp",
                    "webp_size": "112964"
                },
                "downsized_small":
                {
                    "width": "178",
                    "height": "130",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-downsized-small.mp4",
                    "mp4_size": "64884"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w_d.gif",
                    "width": "200",
                    "height": "146",
                    "size": "93950",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200w_d.webp",
                    "webp_size": "55298"
                },
                "downsized_medium":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.gif",
                    "width": "450",
                    "height": "329",
                    "size": "3229772"
                },
                "original":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.gif",
                    "width": "450",
                    "height": "329",
                    "size": "3229772",
                    "frames": "49",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.mp4",
                    "mp4_size": "1898404",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.webp",
                    "webp_size": "2018308",
                    "hash": "9de7280226c71a57674775e2cae3b9dd"
                },
                "fixed_height":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200.gif",
                    "width": "274",
                    "height": "200",
                    "size": "1204551",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200.mp4",
                    "mp4_size": "344716",
                    "webp": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/200.webp",
                    "webp_size": "721328"
                },
                "looping":
                {
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-loop.mp4",
                    "mp4_size": "6644462"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "350",
                    "mp4": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy.mp4",
                    "mp4_size": "1898404"
                },
                "preview_gif":
                {
                    "url": "https://media2.giphy.com/media/1nRyaJ7xXJuzHIF7zL/giphy-preview.gif",
                    "width": "119",
                    "height": "87",
                    "size": "47941"
                },
                "480w_still":
                {
                    "url": "https://media1.giphy.com/media/1nRyaJ7xXJuzHIF7zL/480w_s.jpg",
                    "width": "480",
                    "height": "351"
                }
            },
            "title": "valentines day lol GIF by Boomerang Official",
            "_score": 500027.25,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=1nRyaJ7xXJuzHIF7zL&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=1nRyaJ7xXJuzHIF7zL&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=1nRyaJ7xXJuzHIF7zL&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "l3mZl74XfCHQc8mc0",
            "slug": "fun-hands-cello-l3mZl74XfCHQc8mc0",
            "url": "https://giphy.com/gifs/fun-hands-cello-l3mZl74XfCHQc8mc0",
            "bitly_gif_url": "https://gph.is/2ATqzkU",
            "bitly_url": "https://gph.is/2ATqzkU",
            "embed_url": "https://giphy.com/embed/l3mZl74XfCHQc8mc0",
            "username": "medicitv",
            "source": "",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2017-12-05 15:58:14",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media2.giphy.com/avatars/medicitv/4hAPikWbVeJj.jpg",
                "banner_url": "",
                "profile_url": "https://giphy.com/medicitv/",
                "username": "medicitv",
                "display_name": "medici.tv",
                "is_verified": false
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200_s.gif",
                    "width": "356",
                    "height": "200",
                    "size": "27123"
                },
                "original_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy_s.gif",
                    "width": "480",
                    "height": "270",
                    "size": "75877"
                },
                "fixed_width":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w.gif",
                    "width": "200",
                    "height": "113",
                    "size": "489353",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w.mp4",
                    "mp4_size": "78345",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w.webp",
                    "webp_size": "105468"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100_s.gif",
                    "width": "178",
                    "height": "100",
                    "size": "11253"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200_d.gif",
                    "width": "356",
                    "height": "200",
                    "size": "177281",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200_d.webp",
                    "webp_size": "99414"
                },
                "preview":
                {
                    "width": "192",
                    "height": "108",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-preview.mp4",
                    "mp4_size": "32080"
                },
                "fixed_height_small":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100.gif",
                    "width": "178",
                    "height": "100",
                    "size": "418100",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100.mp4",
                    "mp4_size": "68655",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100.webp",
                    "webp_size": "93704"
                },
                "downsized_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-downsized_s.gif",
                    "width": "480",
                    "height": "270",
                    "size": "40027"
                },
                "downsized":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-downsized.gif",
                    "width": "480",
                    "height": "270",
                    "size": "1575665"
                },
                "downsized_large":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "2354115"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100w_s.gif",
                    "width": "100",
                    "height": "57",
                    "size": "4299"
                },
                "preview_webp":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-preview.webp",
                    "width": "200",
                    "height": "112",
                    "size": "47368"
                },
                "fixed_width_still":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w_s.gif",
                    "width": "200",
                    "height": "113",
                    "size": "13958"
                },
                "fixed_width_small":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100w.gif",
                    "width": "100",
                    "height": "57",
                    "size": "154433",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100w.mp4",
                    "mp4_size": "30819",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/100w.webp",
                    "webp_size": "44564"
                },
                "downsized_small":
                {
                    "width": "369",
                    "height": "208",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-downsized-small.mp4",
                    "mp4_size": "100251"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w_d.gif",
                    "width": "200",
                    "height": "113",
                    "size": "76068",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200w_d.webp",
                    "webp_size": "40122"
                },
                "downsized_medium":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "2354115"
                },
                "original":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "2354115",
                    "frames": "44",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.mp4",
                    "mp4_size": "295594",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.webp",
                    "webp_size": "402856",
                    "hash": "780163a5284330456d25db88f2fc5c94"
                },
                "fixed_height":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200.gif",
                    "width": "356",
                    "height": "200",
                    "size": "1159212",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200.mp4",
                    "mp4_size": "181198",
                    "webp": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/200.webp",
                    "webp_size": "238304"
                },
                "hd":
                {
                    "width": "1280",
                    "height": "720",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-hd.mp4",
                    "mp4_size": "2135744"
                },
                "looping":
                {
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-loop.mp4",
                    "mp4_size": "3416360"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "270",
                    "mp4": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy.mp4",
                    "mp4_size": "295594"
                },
                "preview_gif":
                {
                    "url": "https://media3.giphy.com/media/l3mZl74XfCHQc8mc0/giphy-preview.gif",
                    "width": "133",
                    "height": "75",
                    "size": "49743"
                },
                "480w_still":
                {
                    "url": "https://media1.giphy.com/media/l3mZl74XfCHQc8mc0/480w_s.jpg",
                    "width": "480",
                    "height": "270"
                }
            },
            "title": "fun hands GIF",
            "_score": 500021.34,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=l3mZl74XfCHQc8mc0&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=l3mZl74XfCHQc8mc0&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=l3mZl74XfCHQc8mc0&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "p92Pip4uIcuGY",
            "slug": "netflix-and-chill-p92Pip4uIcuGY",
            "url": "https://giphy.com/gifs/netflix-and-chill-p92Pip4uIcuGY",
            "bitly_gif_url": "https://gph.is/28MmkeH",
            "bitly_url": "https://gph.is/28MmkeH",
            "embed_url": "https://giphy.com/embed/p92Pip4uIcuGY",
            "username": "",
            "source": "https://buzzhate.com/post/136226929916/10-minutes-into-bach-cello-suites-and-chill-and",
            "rating": "g",
            "content_url": "",
            "source_tld": "buzzhate.com",
            "source_post_url": "https://buzzhate.com/post/136226929916/10-minutes-into-bach-cello-suites-and-chill-and",
            "is_sticker": 0,
            "import_datetime": "2016-06-21 15:19:28",
            "trending_datetime": "1970-01-01 00:00:00",
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200_s.gif",
                    "width": "356",
                    "height": "200"
                },
                "original_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy_s.gif",
                    "width": "480",
                    "height": "270"
                },
                "fixed_width":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w.gif",
                    "width": "200",
                    "height": "113",
                    "size": "265227",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w.mp4",
                    "mp4_size": "20635",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w.webp",
                    "webp_size": "86640"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/100_s.gif",
                    "width": "178",
                    "height": "100"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200_d.gif",
                    "width": "356",
                    "height": "200",
                    "size": "88714",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/200_d.webp",
                    "webp_size": "33238"
                },
                "preview":
                {
                    "width": "362",
                    "height": "202",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy-preview.mp4",
                    "mp4_size": "18864"
                },
                "fixed_height_small":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/100.gif",
                    "width": "178",
                    "height": "100",
                    "size": "227560",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/100.mp4",
                    "mp4_size": "18009",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/100.webp",
                    "webp_size": "71968"
                },
                "downsized_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy_s.gif",
                    "width": "480",
                    "height": "270"
                },
                "downsized":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "521256"
                },
                "downsized_large":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "521256"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/100w_s.gif",
                    "width": "100",
                    "height": "56"
                },
                "preview_webp":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy-preview.webp",
                    "width": "372",
                    "height": "209",
                    "size": "48686"
                },
                "fixed_width_still":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w_s.gif",
                    "width": "200",
                    "height": "113"
                },
                "fixed_width_small":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/100w.gif",
                    "width": "100",
                    "height": "56",
                    "size": "94881",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/100w.mp4",
                    "mp4_size": "9008",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/100w.webp",
                    "webp_size": "35254"
                },
                "downsized_small":
                {
                    "width": "480",
                    "height": "270",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy-downsized-small.mp4",
                    "mp4_size": "139853"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w_d.gif",
                    "width": "200",
                    "height": "113",
                    "size": "30447",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/200w_d.webp",
                    "webp_size": "13298"
                },
                "downsized_medium":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "521256"
                },
                "original":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.gif",
                    "width": "480",
                    "height": "270",
                    "size": "521256",
                    "frames": "42",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.mp4",
                    "mp4_size": "140015",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.webp",
                    "webp_size": "439180"
                },
                "fixed_height":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/200.gif",
                    "width": "356",
                    "height": "200",
                    "size": "722093",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/200.mp4",
                    "mp4_size": "50288",
                    "webp": "https://media3.giphy.com/media/p92Pip4uIcuGY/200.webp",
                    "webp_size": "209952"
                },
                "looping":
                {
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy-loop.mp4",
                    "mp4_size": "769966"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "270",
                    "mp4": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy.mp4",
                    "mp4_size": "140015"
                },
                "preview_gif":
                {
                    "url": "https://media3.giphy.com/media/p92Pip4uIcuGY/giphy-preview.gif",
                    "width": "212",
                    "height": "119",
                    "size": "47820"
                },
                "480w_still":
                {
                    "url": "https://media1.giphy.com/media/p92Pip4uIcuGY/480w_s.jpg",
                    "width": "480",
                    "height": "270"
                }
            },
            "title": "classical music symphony GIF",
            "_score": 500020.1,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=p92Pip4uIcuGY&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=p92Pip4uIcuGY&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=p92Pip4uIcuGY&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "eM0fdTzH3lf3YCAGzz",
            "slug": "bambera-cello-pabloferrandez-eM0fdTzH3lf3YCAGzz",
            "url": "https://giphy.com/gifs/bambera-cello-pabloferrandez-eM0fdTzH3lf3YCAGzz",
            "bitly_gif_url": "https://gph.is/g/4V2Bb34",
            "bitly_url": "https://gph.is/g/4V2Bb34",
            "embed_url": "https://giphy.com/embed/eM0fdTzH3lf3YCAGzz",
            "username": "bambera",
            "source": "https://www.pabloferrandez.com",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.pabloferrandez.com",
            "source_post_url": "https://www.pabloferrandez.com",
            "is_sticker": 0,
            "import_datetime": "2019-04-10 18:28:12",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media0.giphy.com/avatars/bambera/rYQg6FLuWxTL.png",
                "banner_url": "",
                "profile_url": "https://giphy.com/bambera/",
                "username": "bambera",
                "display_name": "bambera",
                "is_verified": false
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200_s.gif",
                    "width": "229",
                    "height": "200",
                    "size": "5389"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy_s.gif",
                    "width": "478",
                    "height": "418",
                    "size": "18433"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w.gif",
                    "width": "200",
                    "height": "175",
                    "size": "224644",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w.mp4",
                    "mp4_size": "116301",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w.webp",
                    "webp_size": "191304"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100_s.gif",
                    "width": "115",
                    "height": "100",
                    "size": "2467"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200_d.gif",
                    "width": "229",
                    "height": "200",
                    "size": "44897",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200_d.webp",
                    "webp_size": "32576"
                },
                "preview":
                {
                    "width": "352",
                    "height": "308",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy-preview.mp4",
                    "mp4_size": "35172"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100.gif",
                    "width": "115",
                    "height": "100",
                    "size": "99561",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100.mp4",
                    "mp4_size": "45936",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100.webp",
                    "webp_size": "89526"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy_s.gif",
                    "width": "478",
                    "height": "418",
                    "size": "18433"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "1001016"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "1001016"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100w_s.gif",
                    "width": "100",
                    "height": "88",
                    "size": "2179"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy-preview.webp",
                    "width": "344",
                    "height": "300",
                    "size": "48792"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w_s.gif",
                    "width": "200",
                    "height": "175",
                    "size": "4642"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100w.gif",
                    "width": "100",
                    "height": "88",
                    "size": "85416",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100w.mp4",
                    "mp4_size": "38552",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/100w.webp",
                    "webp_size": "73526"
                },
                "downsized_small":
                {
                    "width": "375",
                    "height": "328",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy-downsized-small.mp4",
                    "mp4_size": "162223"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w_d.gif",
                    "width": "200",
                    "height": "175",
                    "size": "37933",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200w_d.webp",
                    "webp_size": "27384"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "1001016"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "1001016",
                    "frames": "72",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.mp4",
                    "mp4_size": "322413",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.webp",
                    "webp_size": "469996",
                    "hash": "3973f0cdf3beed0b2a4eabbe67957a17"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200.gif",
                    "width": "229",
                    "height": "200",
                    "size": "258234",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200.mp4",
                    "mp4_size": "124973",
                    "webp": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/200.webp",
                    "webp_size": "225768"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy-loop.mp4",
                    "mp4_size": "921107"
                },
                "original_mp4":
                {
                    "width": "478",
                    "height": "418",
                    "mp4": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy.mp4",
                    "mp4_size": "322413"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/giphy-preview.gif",
                    "width": "186",
                    "height": "163",
                    "size": "48111"
                },
                "480w_still":
                {
                    "url": "https://media0.giphy.com/media/eM0fdTzH3lf3YCAGzz/480w_s.jpg",
                    "width": "480",
                    "height": "420"
                }
            },
            "title": "cello pabloferrandez GIF by bambera",
            "_score": 500019.97,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=eM0fdTzH3lf3YCAGzz&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=eM0fdTzH3lf3YCAGzz&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=eM0fdTzH3lf3YCAGzz&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "fW5ji18v8UqUEBsLGm",
            "slug": "bambera-pabloferrandez-fW5ji18v8UqUEBsLGm",
            "url": "https://giphy.com/gifs/bambera-pabloferrandez-fW5ji18v8UqUEBsLGm",
            "bitly_gif_url": "https://gph.is/g/E0oJQ54",
            "bitly_url": "https://gph.is/g/E0oJQ54",
            "embed_url": "https://giphy.com/embed/fW5ji18v8UqUEBsLGm",
            "username": "bambera",
            "source": "",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-04-10 20:40:32",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media0.giphy.com/avatars/bambera/rYQg6FLuWxTL.png",
                "banner_url": "",
                "profile_url": "https://giphy.com/bambera/",
                "username": "bambera",
                "display_name": "bambera",
                "is_verified": false
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200_s.gif",
                    "width": "229",
                    "height": "200",
                    "size": "15438"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy_s.gif",
                    "width": "478",
                    "height": "418",
                    "size": "42556"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w.gif",
                    "width": "200",
                    "height": "175",
                    "size": "222050",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w.mp4",
                    "mp4_size": "83322",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w.webp",
                    "webp_size": "139226"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100_s.gif",
                    "width": "115",
                    "height": "100",
                    "size": "4302"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200_d.gif",
                    "width": "229",
                    "height": "200",
                    "size": "55938",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200_d.webp",
                    "webp_size": "40670"
                },
                "preview":
                {
                    "width": "381",
                    "height": "334",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy-preview.mp4",
                    "mp4_size": "28176"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100.gif",
                    "width": "115",
                    "height": "100",
                    "size": "103512",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100.mp4",
                    "mp4_size": "31654",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100.webp",
                    "webp_size": "66264"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy_s.gif",
                    "width": "478",
                    "height": "418",
                    "size": "42556"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "972805"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "972805"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100w_s.gif",
                    "width": "100",
                    "height": "88",
                    "size": "3670"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy-preview.webp",
                    "width": "360",
                    "height": "314",
                    "size": "47374"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w_s.gif",
                    "width": "200",
                    "height": "175",
                    "size": "11131"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100w.gif",
                    "width": "100",
                    "height": "88",
                    "size": "87128",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100w.mp4",
                    "mp4_size": "26727",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/100w.webp",
                    "webp_size": "55474"
                },
                "downsized_small":
                {
                    "width": "398",
                    "height": "348",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy-downsized-small.mp4",
                    "mp4_size": "127314"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w_d.gif",
                    "width": "200",
                    "height": "175",
                    "size": "47793",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200w_d.webp",
                    "webp_size": "34290"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "972805"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.gif",
                    "width": "478",
                    "height": "418",
                    "size": "972805",
                    "frames": "80",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.mp4",
                    "mp4_size": "285870",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.webp",
                    "webp_size": "353264",
                    "hash": "c841e346fda40e6c1db7b91063805738"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200.gif",
                    "width": "229",
                    "height": "200",
                    "size": "270529",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200.mp4",
                    "mp4_size": "91230",
                    "webp": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/200.webp",
                    "webp_size": "169290"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy-loop.mp4",
                    "mp4_size": "768118"
                },
                "original_mp4":
                {
                    "width": "478",
                    "height": "418",
                    "mp4": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy.mp4",
                    "mp4_size": "285870"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/fW5ji18v8UqUEBsLGm/giphy-preview.gif",
                    "width": "167",
                    "height": "146",
                    "size": "48806"
                },
                "480w_still":
                {
                    "url": "https://media3.giphy.com/media/fW5ji18v8UqUEBsLGm/480w_s.jpg",
                    "width": "480",
                    "height": "420"
                }
            },
            "title": "cello soloist GIF by bambera",
            "_score": 500019.97,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=fW5ji18v8UqUEBsLGm&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=fW5ji18v8UqUEBsLGm&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=fW5ji18v8UqUEBsLGm&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "hrXGbPOR8mZoF4UMtn",
            "slug": "bambera-cello-violonchelo-pabloferrandez-hrXGbPOR8mZoF4UMtn",
            "url": "https://giphy.com/gifs/bambera-cello-violonchelo-pabloferrandez-hrXGbPOR8mZoF4UMtn",
            "bitly_gif_url": "https://gph.is/g/aX2gYe4",
            "bitly_url": "https://gph.is/g/aX2gYe4",
            "embed_url": "https://giphy.com/embed/hrXGbPOR8mZoF4UMtn",
            "username": "bambera",
            "source": "",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-04-10 21:23:55",
            "trending_datetime": "0000-00-00 00:00:00",
            "user":
            {
                "avatar_url": "https://media0.giphy.com/avatars/bambera/rYQg6FLuWxTL.png",
                "banner_url": "",
                "profile_url": "https://giphy.com/bambera/",
                "username": "bambera",
                "display_name": "bambera",
                "is_verified": false
            },
            "images":
            {
                "fixed_height_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200_s.gif",
                    "width": "302",
                    "height": "200",
                    "size": "21155"
                },
                "original_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy_s.gif",
                    "width": "480",
                    "height": "318",
                    "size": "48512"
                },
                "fixed_width":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w.gif",
                    "width": "200",
                    "height": "133",
                    "size": "344870",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w.mp4",
                    "mp4_size": "65975",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w.webp",
                    "webp_size": "137892"
                },
                "fixed_height_small_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100_s.gif",
                    "width": "151",
                    "height": "100",
                    "size": "7528"
                },
                "fixed_height_downsampled":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200_d.gif",
                    "width": "302",
                    "height": "200",
                    "size": "104542",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200_d.webp",
                    "webp_size": "61510"
                },
                "preview":
                {
                    "width": "383",
                    "height": "254",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy-preview.mp4",
                    "mp4_size": "32182"
                },
                "fixed_height_small":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100.gif",
                    "width": "151",
                    "height": "100",
                    "size": "236423",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100.mp4",
                    "mp4_size": "45491",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100.webp",
                    "webp_size": "101976"
                },
                "downsized_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy_s.gif",
                    "width": "480",
                    "height": "318",
                    "size": "48512"
                },
                "downsized":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.gif",
                    "width": "480",
                    "height": "318",
                    "size": "1569211"
                },
                "downsized_large":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.gif",
                    "width": "480",
                    "height": "318",
                    "size": "1569211"
                },
                "fixed_width_small_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100w_s.gif",
                    "width": "100",
                    "height": "67",
                    "size": "4383"
                },
                "preview_webp":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy-preview.webp",
                    "width": "262",
                    "height": "174",
                    "size": "48854"
                },
                "fixed_width_still":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w_s.gif",
                    "width": "200",
                    "height": "133",
                    "size": "14124"
                },
                "fixed_width_small":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100w.gif",
                    "width": "100",
                    "height": "67",
                    "size": "135450",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100w.mp4",
                    "mp4_size": "26042",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/100w.webp",
                    "webp_size": "57350"
                },
                "downsized_small":
                {
                    "width": "431",
                    "height": "286",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy-downsized-small.mp4",
                    "mp4_size": "104782"
                },
                "fixed_width_downsampled":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w_d.gif",
                    "width": "200",
                    "height": "133",
                    "size": "53575",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200w_d.webp",
                    "webp_size": "33598"
                },
                "downsized_medium":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.gif",
                    "width": "480",
                    "height": "318",
                    "size": "1569211"
                },
                "original":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.gif",
                    "width": "480",
                    "height": "318",
                    "size": "1569211",
                    "frames": "50",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.mp4",
                    "mp4_size": "219033",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.webp",
                    "webp_size": "359024",
                    "hash": "4c42039dd6a3918082f1e05c2f58d7d5"
                },
                "fixed_height":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200.gif",
                    "width": "302",
                    "height": "200",
                    "size": "661002",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200.mp4",
                    "mp4_size": "116116",
                    "webp": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/200.webp",
                    "webp_size": "231358"
                },
                "looping":
                {
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy-loop.mp4",
                    "mp4_size": "940959"
                },
                "original_mp4":
                {
                    "width": "480",
                    "height": "318",
                    "mp4": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy.mp4",
                    "mp4_size": "219033"
                },
                "preview_gif":
                {
                    "url": "https://media0.giphy.com/media/hrXGbPOR8mZoF4UMtn/giphy-preview.gif",
                    "width": "97",
                    "height": "64",
                    "size": "48082"
                },
                "480w_still":
                {
                    "url": "https://media1.giphy.com/media/hrXGbPOR8mZoF4UMtn/480w_s.jpg",
                    "width": "480",
                    "height": "318"
                }
            },
            "title": "cello pabloferrandez GIF by bambera",
            "_score": 500019.97,
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=hrXGbPOR8mZoF4UMtn&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=hrXGbPOR8mZoF4UMtn&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5cb3a8f445534a70367beb4c&event_type=GIF_SEARCH&gif_id=hrXGbPOR8mZoF4UMtn&action_type=SENT"
                }
            }
        }
    ],
    "pagination":
    {
        "total_count": 497,
        "count": 10,
        "offset": 0
    },
    "meta":
    {
        "status": 200,
        "msg": "OK",
        "response_id": "5cb3a8f445534a70367beb4c"
    }
 }

var parseImages = function(response) {
    
}

// GIF Generation Function
var generateGifs = function(object) {
    for(var i = 0; i<object.data.length; i++) {
        
        var newCard = $("<div>").attr({
            "class": "card col-sm-2",
            "style": "5rem"
        });

        var newImage = $("<img>").attr({
            "src": JSON.data[i].images.fixed_height_small_still.url,
            "class": "gif card-img-top",
            "alt": object.data[i].title,
            "data-state": "still",
            "data-still": JSON.data[i].images.fixed_height_small_still.url,
            "data-animate": JSON.data[i].images.fixed_height_small.url
        });

        var newCardBodyDiv = $("<div>").attr("class", "card-body");
        
        var newCardBodyP = $("<p>").attr("class", "card-text")
        .text("Rating: " + JSON.data[i].rating);

        newCardBodyDiv.append(newCardBodyP);
        newCard.append(newImage);
        newCard.append(newCardBodyDiv);
        $("#images").append(newCard);
    }
}

// QUERY URL GENERATOR
var getURL = function(searchTerm){
    
    // Base URL
    var URL = "https://api.giphy.com/v1/gifs/search?api_key=0mPXs0Br3kSQLmpAzX0PK4FdfMO85PrK&q=";
    
    URL += searchTerm.replace(/ /g, '+');           // Append searchTerm, replacing spaces with +'s
    URL += "&limit=10";                             // Append search Result Size
    URL += "rating=G";                              // Append rating
    URL += "&lang=en";                              // Append language result filter
    return URL;
}

// BUTTON GENERATOR
var generateButtons = function(){
    $("#buttons").empty();
    for(var i=0; i<topics.length; i++){
        var newButton = $("<button>").attr({
            "type": "button",
            "class": "btn btn-info",
            "data-topic": topics[i]
        })
        .text(topics[i])
        .appendTo("#buttons");
    }
}

// SUBMIT BUTTON
$("#submit").on("click", function(){
    var newTopic = $("#search-box").val();
    if(!topics.includes(newTopic) && newTopic != ""){
        topics.push($("#search-box").val().trim());
        generateButtons();
    }
});

generateButtons();
generateGifs(JSON);

// GIF CLICK EVENT HANDLER
$(".gif").on("click", function() {
    console.log("Clicked!");
    var state = $(this).attr("data-state");
    if(state === "still"){
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("data-animate"));
    } else {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("data-still"));
    }
});

$(".btn-info").on("click", function(){
    var queryURL = getURL($(this).attr("data-topic"));

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(jsonData){

    });
});
