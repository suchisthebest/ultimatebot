import discord
client = discord.Client()
from discord.ext import commands

client = commands.Bot(command_prefix = '~') #change the '~' to anything you want since this is what you'll be typing to signify that the following text is a command.

version = '1.0'


@client.event
async def on_ready():
    print('Bot is ready and is running version ' + version + '!')


@client.command()
async def discord(ctx):
    await ctx.send('here is our discord: https://discord.gg/rtjbdHu') #this is our discord server so you can join here.


client.run('token here')
