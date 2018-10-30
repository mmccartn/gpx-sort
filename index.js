#!/usr/bin/env node

const ArgumentParser = require('argparse').ArgumentParser
const fs = require('fs')
const path = require('path')
const xml2js = require('xml2js')

const APP_NAME = 'GPX Sort'

const gpxSort = async (input, output) => {
    const data = fs.readFileSync(path.join(__dirname, input))
    const parser = new xml2js.Parser()
    const result = await new Promise((resolve, reject) => {
        parser.parseString(data, (err, res) => err ? reject(err) : resolve(res))
    })
    result.gpx.trk[0].trkseg[0].trkpt = result.gpx.trk[0].trkseg[0].trkpt.sort(
        (ptA, ptB) => Date.parse(ptA.time[0]) - Date.parse(ptB.time[0])
    )
    fs.writeFileSync(output, (new xml2js.Builder()).buildObject(result))
}

if (require.main === module) {
    const parser = new ArgumentParser({
        version: '0.1.0',
        addHelp: true,
        description: APP_NAME
    })
    parser.addArgument(
        ['-i', '--input'],
        { help: 'Input file path' }
    )
    parser.addArgument(
        ['-o', '--output'],
        { help: 'Output file path', defaultValue: path.join(__dirname, 'data', 'out.gpx') }
    )
    const args = parser.parseArgs()
    const main = async () => {
        console.info(`=== ${APP_NAME} ===`)
        await gpxSort(args.input, args.output)
        console.log('Done')
    }
    main()
}

module.exports = {
    gpxSort
}
