<cfset facebook = "charlottecapoeira" >
<cfset facebook_ID = "33226513164" >
<cfset facebook_Event = "53219688800" >
<cfset FB_appID = "434804283219692" >
<cfset FB_appSecret = "f19f0ba158e54b1c99bae777b4e14b4b" >

<cfscript> 
/**
 * Abbreviates a given string to roughly the given length, stripping any tags, making sure the ending doesn't chop a word in two, and adding an ellipsis character at the end.
 * @param string   String to use. (Required)
 * @param len      Length to use. (Required)
 * @return Returns a string. 
 */
function abbreviate(string,len) {
    var newString = REReplace(string, "<[^>]*>", " ", "ALL");
    var lastSpace = 0;
    newString = REReplace(newString, " \s*", " ", "ALL");
    if (len(newString) gt len) {
        newString = left(newString, len-2);
        lastSpace = find(" ", reverse(newString));
        lastSpace = len(newString) - lastSpace;
        newString = left(newString, lastSpace) & "  &##8230;";
    }    
    return newString;
}
</cfscript> 

<cffunction name="getFBToken">
	<cfargument name="appID">
	<cfargument name="appSecret">
	<cfhttp method="get" url="https://graph.facebook.com/oauth/access_token?client_id=#arguments.appID#&client_secret=#arguments.appSecret#&grant_type=client_credentials" result="local.result">
	<cfset local.content = local.result.filecontent>
	<cfset local.access_token = RemoveChars(local.content,1,13)>
	<cfreturn local.access_token>
</cffunction>



<cffunction name="prependIfShort" returntype="string" output="false">
    <cfargument name="String" type="string"  required />
    <cfargument name="Prefix" type="string"  required />
    <cfargument name="Limit"  type="numeric" required />

    <cfif len(Arguments.String) LTE Arguments.Limit >
        <cfreturn Arguments.Prefix & Arguments.String />
    <cfelse>
        <cfreturn Arguments.String />
    </cfif>
</cffunction>

<cffunction name="appendIfShort" returntype="string" output="false">
    <cfargument name="String" type="string"  required />
    <cfargument name="suffix" type="string"  required />
    <cfargument name="Limit"  type="numeric" required />

    <cfif len(Arguments.String) LTE Arguments.Limit >
        <cfreturn Arguments.String & Arguments.suffix />
    <cfelse>
        <cfreturn Arguments.String />
    </cfif>
</cffunction>

<cfset variables.fb_token = getFBToken(FB_appID, FB_appSecret)>
<cfhttp url="http://www.google.com/calendar/feeds/cdocharlottecapoeira%40gmail.com/public/basic">

<cfset theData = xmlParse(cfhttp.FileContent)>
<cfset cfData=serializeJSON(theData)>

<cfdump var=#cfData#>
