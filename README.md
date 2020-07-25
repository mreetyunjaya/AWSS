# AWSS
AWSS (AUTOMATED WEB SOFTWARE SECURITY) | A NOVEL WEB SECURITY TEACHING TOOLKIT

# Introduction
Web applications have become an integral part of everyday life, but many of these applications are deployed with critical vulnerabilities that can be fatally exploited. As the technology used to develop these applications become sophisticated, so do the attackers’ techniques. Attackers no longer need physical access to the victims, they can attack more than one at the same time and the possibility of being caught and brought to justice is minimal.
Automated web vulnerability scanners have been heavily used to assess the security of web applications. They can improve the efficiency of vulnerability scanning compared to traditional manual vulnerability detection that are time-consuming, labor-intensive, and inefficient. There are a lot of web vulnerability scanners on the Internet, however, they do not explain the possible attack and how to have counter- measurements against it. 
We designed and implemented a new automated web vulnerability scanner called Automated Web Software Security (AWSS) Toolkit, which scans a web project’s source code and generates a report of the results with detailed explanation about each possible vulnerability and how to secure against it. We have tested the performance of AWSS, and compared its results with other major open source vulnerability scanners. Our results show that AWSS can identify web software security vulnerabilities more comprehensively and accurately.

NOTE!!: It is Still under development, Usages and Notes will be added later..
Works only on Windows for Now!, not tested on Linux, Tested on OSX it didn't work, didn't have time to check why, will check later.

# What is AWSS Toolkit?
AWSS is an Open Source, Source Code Scanning Tool, it is a CLI (Command Line Interface) application, developed with JavaScript (Node.js framework).

Currently concentrates on PHP and MySQL programming languages, but since its core functionalities are ready and available for everyone, programmers can contribute and add plugins or extensions to it, to add features and make it scan for other programming languages such as Java, C#, Python, etc.., and their frameworks. So its infrastructure is designed to be contributed with other programmers to make it better and more novel.

The best of our knowledge, AWSS is the only tool that scans PHP language according to OWASP Top 10 Web Application Security Risks.

# How AWSS Teaches Developers of How to Secure their Codes ?
When AWSS scans for a project it checks each and every file line by line for security vulnerabilities. If a vulnerability is detected, it writes in the report at which line in which file a vulenrability was detected and a "Click Here" word to explain the attack and how to secure against it.

AWSS's results are showed as HTML Report linked with PDF files to explain each attack and its protection mechanism.

# How to install and run it?
