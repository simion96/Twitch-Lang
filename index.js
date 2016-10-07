function redirect()
{
    var link = window.location.href;
    if (link.indexOf("directory") != -1)
    {
        if (link.indexOf("/en") == -1){
            if (link != "https://www.twitch.tv/directory")
            {
                if (link != "https://www.twitch.tv/directory/")
                {
                    window.location = link.concat("/en");
                    return 1
                }
            }
        }
    }
}

redirect();

