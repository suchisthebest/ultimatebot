import discord
client = discord.Client()
from discord.ext import commands

client = commands.Bot(command_prefix = '~')

version = '1.0'


@client.event
async def on_ready():
    print('Bot is ready and is running version ' + version + '!')


@client.command()
async def 


client.run('NzQ0NjcxNTIwMTY4ODY5OTcw.XzmnZQ.CagvHoaG7NSOtt6YeEKy5hOTsx8')