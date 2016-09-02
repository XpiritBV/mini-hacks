param
(
    [string] $BuildID="",
    [string] $BuildTags=""
)

$buildTagsArray = $BuildTags.Split(";");
$baseurl = "$($env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI)DefaultCollection/$($env:SYSTEM_TEAMPROJECT)/_apis"

$token = "Bearer $($env:System_AccessToken)"

if ($buildTagsArray.Count -gt 0) {

    foreach($tag in $buildTagsArray)
    {
        $tagURL = "$baseurl/build/builds/$BuildID/tags/$tag`?api-version=2.0"
        $response = Invoke-RestMethod -Uri $tagURL -Headers @{Authorization = $token}  -Method Put
    }
}