#
#
# This script Parses Build Version numbers
# It expects version numbers following a pattern
# BuildNumber should look like $(Date:yyyyMMdd)$(Rev:.r)
# Assembly numbers expected in pattern 1.0.C.D 
#
param
(
	[Parameter(Mandatory=$True)] [string]$AssemblyVersion
)

# write parameters
Write-Host("  AssemblyVersion : ["+$AssemblyVersion+"]") 

$BuildNumber = $env:BUILD_BUILDNUMBER

# version numbers
$parts = $BuildNumber.Split('_')
$dateFromBuild = $BuildNumber.Split('_')[$parts.Length -1] # returns 20100727.9

# splitting
$yeari = $dateFromBuild.Substring(2, 2) # year part 10 from 2010
$monthi = $dateFromBuild.Substring(4, 2) # month part 07
$dayi = $dateFromBuild.Substring(6, 2) # day 27
$revision = $dateFromBuild.Substring(9).PadLeft(3, '0') # revision part 9 or 10 or 11 etc.

# concats
$ym = $yeari + $monthi 
$dr = $dayi + $revision            

# parse the assembly version numbers based on expected template
$assemblyVersion = $AssemblyVersion.Replace("C", $ym).Replace("D", $dr)

# write determined numbers
Write-Host("  Determined Assembly Version : ["+$assemblyVersion+"]")

# find all AssemblyInfo.* files
$AllVersionFiles = Get-ChildItem $env:BUILD_SOURCESDIRECTORY AssemblyInfo.* -recurse

foreach ($file in $AllVersionFiles) 
{ 
	Write-Host "== Updating AssemblyInfo File == " + $file.FullName

	# remove the read-only bit on the file
	Set-ItemProperty $file.FullName IsReadOnly $false

	$tmpFile = $file.FullName + ".tmp"

	get-content $file.FullName | 
	%{$_ -replace 'AssemblyVersion\("[0-9]+(\.([0-9]+|\*)){1,3}"\)', "AssemblyVersion(""$AssemblyVersion"")" }  > $tmpFile 
	
	get-content $file.FullName | 
	%{$_ -replace 'AssemblyFileVersion\("[0-9]+(\.([0-9]+|\*)){1,3}"\)', "AssemblyFileVersion(""$AssemblyVersion"")" }  > $tmpFile 
 
	move-item $TmpFile $file.FullName -force
}


