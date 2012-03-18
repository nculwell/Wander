#!/usr/bin/perl
use strict;
use warnings;
use Cwd;

my $dir = fastgetcwd;
open(my $in, "<", "lighttpd.conf.template")
  or die("Unable to open template file.\n");
open(my $out, ">", "lighttpd.conf")
  or die("Unable to open config file.\n");
foreach my $line (<$in>) {
  $line =~ s/\{\{SITE_BASE\}\}/$dir/;
  print $out $line;
}
close $in;
close $out;

