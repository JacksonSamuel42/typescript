import { MatchReader } from './MatchReader';
import { Summary } from './summary';

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.WinsAnalysisWithHtmlReport('Chelsea')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
