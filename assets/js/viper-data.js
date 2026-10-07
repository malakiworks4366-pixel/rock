/* Generated from the Viper source (github.com/EntitySeaker/viper-git, commands/*.src). */
window.VIPER_CATS = ["Recon", "Exploitation", "Targets & sessions", "Libraries", "Post-exploitation", "Files", "Crypto & hashing", "Viper itself"];
window.VIPER_CMDS = [
{
"n": "addgroup",
"a": "[USER] [GROUP]",
"d": "Adds a user to a group.",
"f": "This command will add a user to a group where [USER] is the user and [GROUP] the group.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "addobject",
"a": "[N/A]",
"d": "Adds the current session to targets.",
"f": "This command will add the current session to the target list.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "adduser",
"a": "[USER] [PASS]",
"d": "Adds a user to the computer.",
"f": "This command will add a user to the computer where [USER] is the user,\nand [PASSWORD] is the password for the user.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "addvar",
"a": "[KEY] [VAL]",
"d": "Adds a variable to the list of variables.",
"f": "This command will add a variable to the list of variabels where [KEY] is the name of the variable,\nand [VAL] is the value of the variable.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "aircrack",
"a": "[PATH]",
"d": "Cracks a file.cap file.",
"f": "This command will crack a file.cap file where [PATH] is the path to the file.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "aireplay",
"a": "[BSSID] [ESSID] [PWR]",
"d": "Generates a file.cap file.",
"f": "This command will generate a file.cap file, where [BSSID] is the bssid of the network,\nwhere [ESSID] is the essid of the network,\nwhere [PWR] is the power of the network.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "airmon",
"a": "[START/STOP] [NETDEVICE]",
"d": "Puts network card into monitor mode.",
"f": "This command will put a network card into monitor mode,\nwhere [START/STOP] is whether to start or stop monitor mode,\nwhere [NETDEVICE] is the network card,\nprovide no arguments to list available network cards.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "apt-get",
"a": "[N/A]",
"d": "Apt client.",
"f": "This command will start the apt-get client.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "back",
"a": "[N/A]",
"d": "Backs out to the previous session.",
"f": "This command will back out to the previous session.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "buffer",
"a": "(LEN/ALL)",
"d": "Shows used commands.",
"f": "This command will show the last used commands,\nwhere (LEN/ALL) is a number of how many commands to show,\nor \"ALL\" to list all commands inside the buffer.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "cat",
"a": "[PATH]",
"d": "Prints the contents of a file.",
"f": "This command will prints the contents of a file,\nwhere [PATH] is the path to the file.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "chgrp",
"a": "(-R) [GROUP] [PATH]",
"d": "Changes the group of a file or directory.",
"f": "This command will change the group of a file or directory where (-R) is recursion,\nwhere [GROUP] is the new group of the file or directory,\nwhere [PATH] is the path of the file or directory.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "chmod",
"a": "(-R) [PERMS] [PATH]",
"d": "Chmods a file or directory.",
"f": "This command will chmod a file or directory where (-R) is recursion,\nwhere [PARMS] are the permissions of the file,\nwhere [PATH] is the path to the file or directory.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "chown",
"a": "(-R) [OWNER] [PATH]",
"d": "Changes the owner of a file or directory.",
"f": "This command will change the owner of a file or directory where (-R) is recursion,\nwhere [OWNER] is the new owner of the file or directory,\nwhere [PATH] is the path to the file or directory.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "clear",
"a": "[N/A]",
"d": "Clears the screen.",
"f": "This command will clear the screen.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "compile",
"a": "[SRCPATH] [DESTPATH]",
"d": "Compiles a program from source.",
"f": "This command will compile a program from source where [SRCPATH] is the path to the sourcecode,\nand [DESTPATH] the path of the compiled program.",
"h": [
"start",
"shell"
],
"c": "Files"
},
{
"n": "corruptlogs",
"a": "[N/A]",
"d": "Corrupts the logfile.",
"f": "This command will currupt the logfile completely,\nand does not leave any log (not even disconnected!).",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Post-exploitation"
},
{
"n": "cp",
"a": "[PATH] [DESTPATH]",
"d": "Copies a file or directory.",
"f": "This command will copy a file or directory where [PATH] is the path of the file or directory and,\n[DESTPATH] the path where the file or directory should be copied to.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "crack",
"a": "[HASH]",
"d": "Cracks an MD5 hash.",
"f": "This command will crack an MD5 hash, where [HASH] is the hash without user.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "credits",
"a": "[N/A]",
"d": "Shows everyone that helped with Viper.",
"f": "This command will show everyone that helped with Viper.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "deepscan",
"a": "[IP]",
"d": "Scans every IP behind a router.",
"f": "This command will scan every IP behind a router where [IP] is the IP,\nwhen used inside the network it will scan all IP's inside the network.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "delgroup",
"a": "[USER] [GROUP]",
"d": "Removes a user from a group.",
"f": "This command will remove a user to a group where [USER] is the user and [GROUP] the group.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "dellib",
"a": "[INDEX]",
"d": "Deletes a library from the library list.",
"f": "This command will delete a library from the library list where [INDEX] is the library.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Libraries"
},
{
"n": "deltarget",
"a": "[INDEX]",
"d": "Deletes a target from the targets list.",
"f": "This command will delete target from the targets list, where [INDEX] is the index of the target.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "deluser",
"a": "[USER]",
"d": "Deletes a user from the computer.",
"f": "This command will delete a user from the computer where [USER] is the user.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "delvar",
"a": "[KEY]",
"d": "Removes a variable to the list of variables.",
"f": "This command will remove a variable to the list of variabels where [KEY] is the name of the variable.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "echo",
"a": "[STRING]",
"d": "Prints text to the screen.",
"f": "This command will print text to the screen.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "exec",
"a": "[PATH]",
"d": "Executes a program.",
"f": "This command will execute a program where [PATH] is the path to the program.",
"h": [
"start",
"shell"
],
"c": "Files"
},
{
"n": "exit",
"a": "[N/A]",
"d": "Exits Viper.",
"f": "This command will exit Viper.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "exploit",
"a": "[IP/LIB] (PORT) [MEM] [VULN] (IP/PASS)",
"d": "Exploits a target library or service.",
"f": "This command will exploit a target library or service,\nwhere [IP/LIB] is the IP or library to exploit,\nwhere (PORT) is the port of the service (not used when exploiting a library),\nwhere [MEM] is the memory address,\nwhere [VULN] is the vulnerable string,\nwhere (IP/PASS) is a local IP for a bounce exploit or PASS to inject a new password.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "exploitscan",
"a": "[LIB/IP] [PORT] (PASS/LANIP)",
"d": "This command will scan a library or IP for exploits.",
"f": "This command will scan a library or IP for exploits,\nwhere [LIB/IP] is a library or IP,\nwhere [PORT] is the port of a service to attack (this can be skipped when attacking a local library),\nwhere (PASS/LANIP) is a password to inject a new password,\nor local IP of any computer on the network for a bounce attack.\nit is possible to add a variable called \"lib\" with a library index, which will be used to scan from.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "findlib",
"a": "[LIB] [VERSION]",
"d": "Scans greyhack for a library.",
"f": "This command will scan greyhack for a library where [LIB] is the library,\nand [VERSION] is the version.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "fs",
"a": "[N/A]",
"d": "Lists the whole filesystem.",
"f": "This command will list the whole filesystem.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "ftp",
"a": "[USER@PASSWORD] [IP] (PORT)",
"d": "Connects to a service using ftp.",
"f": "This command will connects to a server using ftp where [USER@PASSWORD] is the user and password,\nwhere [IP] is the IP of ther server,\nwhere (PORT) is an optional port.",
"h": [
"start",
"shell"
],
"c": "Targets & sessions"
},
{
"n": "get",
"a": "[REMPATH] [DESTPATH]",
"d": "Downloads a file.",
"f": "This command will download a file where [REMPATH] is the path to the file or directory, and [DESTPATH] is the path to the directory to put the file.",
"h": [
"start",
"shell"
],
"c": "Files"
},
{
"n": "getlib",
"a": "[PATH] [JUMPFILE]",
"d": "Imports a library.",
"f": "This command will import a library where [PATH] is the path to the library,\nand [JUMPFILE] is the path to the jumpfile.",
"h": [
"start",
"shell"
],
"c": "Libraries"
},
{
"n": "getviper",
"a": "[PATH] (ARGS)",
"d": "Launches another instance of Viper.",
"f": "This command will launch another instance of Viper and will get the objects and imports from the other instance,\nwhere [PATH] is the path to the new instance of Viper,\nwhere (ARGS) is any optional arguments.",
"h": [
"start",
"shell"
],
"c": "Targets & sessions"
},
{
"n": "gpg",
"a": "[-e/-d] [KEY] [PATH/STRING]",
"d": "Encrypts/decrypts a string or file.",
"f": "This command will encrypt or decrypt a string or file where [-e/-d] is wether to encrypt or decrypt,\nwhere [KEY] is a 16 character long string,\nwhere [PATH/STRING] is the path to a file or string to encrypt/decrypt.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Crypto & hashing"
},
{
"n": "grab",
"a": "[BANK/MAIL/ALL]",
"d": "Grabs all banks and emails.",
"f": "This command will grab all banks and emails where [BANK/MAIL/ALL] is what to grab.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Post-exploitation"
},
{
"n": "groups",
"a": "[USER]",
"d": "Shows the groups of a user.",
"f": "This command will show all the groups a user is part of,\nwhere [USER] is the user.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "help",
"a": "[COMMAND]",
"d": "Displays the help page.",
"f": "This command will display the help pages. \nWhere [COMMAND] is a command that you would like a detailed discription about.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "iwlist",
"a": "[NETDEVICE]",
"d": "Shows available networks.",
"f": "This command will show all available networks, where [NETDEVICE] is the network card.",
"h": [
"start",
"shell",
"computer"
],
"c": "Recon"
},
{
"n": "jump",
"a": "[PATH] (NAME)",
"d": "Creates a jump file.",
"f": "This command will create a jumpfile which is used in other commands.\n[PATH] is the directory the jumpfile should be created in,\nand (NAME) should be the name of the jumpfile.",
"h": [
"start",
"shell"
],
"c": "Libraries"
},
{
"n": "kill",
"a": "[PID/ALL]",
"d": "Kills a process.",
"f": "This command will kill a process where [PID] is the id of the process.\nMultiple process ids can be given or all for closing all.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "libs",
"a": "[N/A]",
"d": "Shows all imported libraries.",
"f": "This command will show all imported libraries.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Libraries"
},
{
"n": "load-theme",
"a": "[N/A]",
"d": "Reloads theme.",
"f": "This command will load the theme from the settings file.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "loop",
"a": "[IP] [PORT] [MEM] [VULN] [IP/PASS]",
"d": "Loops over an exploit, open Map.exe to stop.",
"f": "This command will loop over an exploit, where [IP] is the target IP,\nwhere [PORT] is the target port,\nwhere [MEM] is the memory address,\nwhere [VULN] is the vulnerable string,\nwhere [IP/PASS] is the IP for a bounce attack or a new password to inject.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "ls",
"a": "[PATH]",
"d": "Lists files inside a directory.",
"f": "This command will list all the files inside a directory,\nwhere [PATH] is the path to the directory.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "md5",
"a": "[STRING]",
"d": "Hashes a string with the md5 hash algorithm.",
"f": "This command will hash a string with the md5 hash algorithm where [STRING] is the string to hash.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Crypto & hashing"
},
{
"n": "mkdir",
"a": "[PATH]",
"d": "Creates a directory.",
"f": "This command will create a directory where [PATH] is the path of the directory.",
"h": [
"start",
"shell",
"computer"
],
"c": "Files"
},
{
"n": "msfconsole",
"a": "[N/A]",
"d": "Starts a listiner for incomming rshells.",
"f": "This command will start an rshell listiner.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "msfvenom",
"a": "[IP] [PORT] [PROC]",
"d": "Starts a reverse shell.",
"f": "This command will start a reverse shell on the target,\nwhere [IP] is the IP of the rshell server,\nwhere [PORT] is the port of the rshell server,\nwhere [PROC] is the process's name.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Exploitation"
},
{
"n": "mv",
"a": "[PATH] [DESTPATH]",
"d": "Moves a file or directory.",
"f": "This command will move a file or directory where [PATH] is the path of the file or directory and,\n[DESTPATH] the path where the file or directory should be moved to.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "nmap",
"a": "[IP/RANDOM]",
"d": "Scans a network for open ports.",
"f": "Scans a network for open ports where [IP/RANDOM] is the IP or a random IP to scan.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "nslookup",
"a": "[DOMAIN]",
"d": "Returns the IP of a domain.",
"f": "This command will return the IP of a domain where [DOMAIN] is the domain.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "passwd",
"a": "[USER] [PASSWORD]",
"d": "Changes the password of a user.",
"f": "This command will change the password of a user where [USER] is the user,\nand [PASSWORD] is the new password.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "ps",
"a": "[N/A]",
"d": "Shows all running processes on a computer.",
"f": "This command will show all running processes on a computer.",
"h": [
"start",
"shell",
"computer"
],
"c": "Post-exploitation"
},
{
"n": "put",
"a": "[HOSTPATH] [DESPATH]",
"d": "Uploads a file.",
"f": "This command will upload a file where [HOSTPATH] is the path to the file or directory, and [DESTPATH] is the path to the directory to put the file.",
"h": [
"start",
"shell"
],
"c": "Files"
},
{
"n": "return",
"a": "[N/A]",
"d": "Returns to the starting point.",
"f": "This command will return starting point.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "rm",
"a": "[PATH]",
"d": "Removes a file or directory.",
"f": "This command will remove a file or directory where [PATH] is the path to the file or directory.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
},
{
"n": "save-settings",
"a": "[N/A]",
"d": "Saves settings.",
"f": "This command will save all settings to the settings file.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "scanlib",
"a": "[PATH]",
"d": "Returns library version.",
"f": "This command will return the version of a library,\nwhere [PATH] is the path to the library.\nIt's important to use the correct metaxploit.so.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "secure",
"a": "[-home/-server]",
"d": "Secures a pc or server.",
"f": "This command will secure a pc or server where [-home/-server] is a homePC or server.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Post-exploitation"
},
{
"n": "sha256",
"a": "[STRING]",
"d": "Hashes a string with the sha256 algorithm.",
"f": "This command will use the sha256 algorithm to has a string where [STRING] is the string.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Crypto & hashing"
},
{
"n": "shell",
"a": "[N/A]",
"d": "Starts a shell, Viper will quit!!",
"f": "This command will start a shell, Viper will quit!!",
"h": [
"start",
"shell"
],
"c": "Targets & sessions"
},
{
"n": "sniffer",
"a": "(-save)",
"d": "Starts a sniffer.",
"f": "This command will start a sniffer where (-save) is wether or not to save the encode.src.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "ssh",
"a": "[USER@PASSWORD] [IP] (PORT)",
"d": "Connects to a service using ssh.",
"f": "This command will connects to a server using ssh where [USER@PASSWORD] is the user and password,\nwhere [IP] is the IP of ther server,\nwhere (PORT) is an optional port.",
"h": [
"start",
"shell"
],
"c": "Targets & sessions"
},
{
"n": "sudo",
"a": "[USER] [PASS] (JUMPPATH)",
"d": "Changes the shell to another user.",
"f": "This command will change the shell to another user where [USER] is the user,\nwhere [PASS] is the password,\nwhere (JUMPPATH) is the path to the jumpfile.",
"h": [
"start",
"shell"
],
"c": "Targets & sessions"
},
{
"n": "targets",
"a": "[N/A]",
"d": "Shows all available targets.",
"f": "This command will show all available targets.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "touch",
"a": "[PATH]",
"d": "Creates a file.",
"f": "This command will make a file where [PATH] is the path of the file.\nYou can create multiple files at once.",
"h": [
"start",
"shell",
"computer"
],
"c": "Files"
},
{
"n": "use",
"a": "[INDEX]",
"d": "Uses a selected target.",
"f": "This command will show all use a target where [INDEX] is the selected target.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Targets & sessions"
},
{
"n": "uselib",
"a": "[INDEX]",
"d": "Select a library.",
"f": "This command will select a library where [INDEX] is the index of the library.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Libraries"
},
{
"n": "vars",
"a": "[N/A]",
"d": "Lists all the available variables.",
"f": "This command will list all the variabels.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Viper itself"
},
{
"n": "whois",
"a": "[IP]",
"d": "Returns whois information.",
"f": "This command will show whois information about an IP address,\nwhere [IP] is the IP address.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Recon"
},
{
"n": "wipe",
"a": "(-y)",
"d": "Wipes a machine.",
"f": "This command will wipe a machine where (-y) will skip the confirmation check.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Post-exploitation"
},
{
"n": "write",
"a": "[CONT] [>>/>] [PATH]",
"d": "Writes to a file.",
"f": "This command will write to a file where [CONT] is the content you want to write to the file,\nwhere [>>/>] is the operator (>>) for appending to the file, (>) for replacing the contents,\nwhere [PATH] is the path of the file.",
"h": [
"start",
"shell",
"computer",
"file"
],
"c": "Files"
}
];
