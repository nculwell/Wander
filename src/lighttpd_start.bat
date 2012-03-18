@echo off
if "%CYGWIN_HOME%"=="" set CYGWIN_HOME=C:\cygwin
"%CYGWIN_HOME%\bin\perl.exe" lighttpd_conf_repl.pl "%CYGWIN_HOME%"
"%CYGWIN_HOME%\usr\sbin\lighttpd.exe" -f %~dp0\lighttpd.conf
