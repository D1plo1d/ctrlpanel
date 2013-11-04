Freezer        = require './freezer'
fs             = require 'fs-extra'
which          = require 'which'
{spawn, exec}  = require 'child_process'
require 'sugar'

freezer = new Freezer

task 'build', -> freezer.build()

# task 'zip', "Build the Google Chrome Packaged App", ->
#   logStart("Zipping Chrome Packaged App")
# 
#   zipPath = "#{buildPath}/package/ctrlpanel.zip"
# 
#   fs.deleteSync zipPath
#   fs.mkdirSync "#{buildPath}/package"
# 
#   fs.watchFile zipPath, ->
#     fs.unwatchFile(zipPath)
#     logEnd()
# 
#   spawn "zip", ["-r", zipPath, "./"], cwd: "#{buildPath}/content"


task 'dev', 'start dev env', -> freezer.watch()
