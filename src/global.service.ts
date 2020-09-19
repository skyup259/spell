import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  numberOfQues = 20;
  selectedlevel = 0;
  currentLevelQues = [];
  userInput = [];
  questionNumber = 0;
  userWord = '';
  inputRow = false;
  correctPercetage: any;
  selectedLangIndex = 0;
  selectedLang = 'hi-IN';
  userName = 'Bob';
  allLevelQues = ['book', 'some', 'just', 'which', 'get', 'when', 'who', 'up', 'other', 'do', 'article',
                'only', 'them', 'know', 'time', 'also', 'people', 'had', 'how', 'been', 'new', 'then', 'than', 'use',
                'think', 'good', 'now', 'very', 'see', 'please',
                'well', 'could', 'make', 'first', 'want', 'because', 'most', 'even', 'way', 'much',
                 'here', 'many', 'information', 'two', 'where', 'over', 'work', 'system', 'need', 'after', 'go', 'same',
                'anyone', 'really', 'back', 'its', 'too', 'right', 'did', 'find', 'such', 'him', 'used', 'still', 'being', 'why',
                'say', 'said', 'years', 'before', 'using', 'help', 'something', 'take', 'available', 'software', 'send',
                'since', 'list', 'problem', 'off', 'file', 'must', 'going', 'through', 'each', 'never', 'got', 'name', 'both',
                'world', 'down', 'last', 'read', 'set', 'little', 'another', 'better', 'own', 'group', 'while', 'number', 'might',
                 'post', 'ca', 'long', 'try', 'made', 'best', 'around', 'few', 'things', 'mail', 'sure', 'great', 'point', 'someone',
                'without', 'thanks', 'look', 'computer', 'under', 'again', 'part', 'support', 'message', 'year', 'doesn', 'free',
                'thing', 'call', 'program', 'line', 'day', 'old', 'university', 'that', 'cards', 'systems', 'following', 'experience',
                'lot', 'come', 'give', 'between', 'however', 'every', 'end', 'windows', 'looking', 'you', 'version', 'put', 'different',
                'run', 'card', 'address', 'life', 'anything', 'did', 'money', 'believe', 'let', 'probably', 'data', 'least', 'tell',
                'always', 'found', 'case', 'says', 'though', 'state', 'real', 'game', 'yes', 'actually', 'course', 'place', 'order', 'problems',
                'either', 'book', 'enough', 'home', 'sold', 'files', 'man', 'once', 'next', 'called', 'power', 'source', 'high', 'fact',
                'question', 'keep', 'John', 'human', 'show', 'big', 'interested', 'above', 'far', 'able', 'else', 'hard', 'thought', 'done',
                'ever', 'against', 'start', 'access', 'government', 'drive', 'box', 'service', 'several', 'check', 'until',
                'others', 'person', 'having', 'doing', 'maybe', 'love', 'three', 'seems', 'server', 'feel', 'seen', 'black', 'nothing', 'area', 'getting',
                'yet', 'trying', 'possible', 'Feb', 'info', 'bit', 'small', 'days', 'less', 'type', 'page', 'change', 'times',
                'business', 'company', 'full', 'quite', 'price', 'bad', 'public', 'control', 'current', 'job', 'mean', 'away', 'hope',
                'second', 'white', 'play', 'news', 'site', 'code', 'general', 'already', 'rather', 'is', 'network', 'running',
                'open', 'questions', 'position', 'include', 'remember', 'contact', 'phone', 'stuff', 'including', 'web', 'local',
                'David', 'works', 'example', 'wrong', 'ask', 'word', 'during', 'date', 'subject', 'working', 'makes', 'music', 'large',
                'posted', 'pay', 'heard', 'idea', 'reason', 'services', 'write', 'left', 'kind', 'note', 'based', 'mind', 'via', 'means',
                'buy', 'development', 'posting', 'level', 'god', 'pretty', 'live', 'copy', 'games', 'original', 'research', 'law', 'hand',
                'test', 'text', 'given', 'sound', 'seem', 'bid', 'machine', 'whole', 'within', 'school', 'tried', 'American', 'per',
                'making', 'everyone', 'user', 'form', 'there', 'often', 'issue', 'net', 'bill', 'top', 'body', 'ago', 'went', 'came',
                'memory', 'national', 'add', 'nice', 'space', 'states', 'library', 'wo', 'everything', 'side', 'whether', 'fine',
                'almost', 'technology', 'women', 'books', 'design', 'matter', 'video', 'although', 'definition', 'war', 'week', 'perhaps',
                'answer', 'head', 'programs', 'team', 'users', 'cannot', 'standard', 'groups', 'disk', 'later', 'personal', 'understand',
                'size', 'country', 'usually', 'instead', 'water', 'important', 'special', 'international', 'told', 'care', 'house', 'red',
                'mark', 'comes', 'today', 'written', 'agree', 'similar', 'complete', 'provide', 'sequence', 'pub', 'reading', 'simply',
                'product', 'asked', 'city', 'Michael', 'due', 'months', 'major', 'plus', 'cost', 'words', 'science', 'cut', 'process',
                'market', 'offer', 'men', 'guess', 'started', 'language', 'unless', 'technical', 'night', 'ok', 'common', 'story', 'anyway',
                'light', 'stop', 'discussion', 'children', 'key', 'thank', 'points', 'short', 'sale', 'saying', 'section', 'single',
                'products', 'class', 'especially', 'easy', 'sorry', 'become', 'couple', 'rights', 'myself', 'along', 'wanted', 'wall',
                'sent', 'talk', 'speed', 'report', 'green', 'future', 'series', 'below', 'none', 'hear', 'soon', 'interest', 'together',
                'turn', 'goes', 'needs', 'project', 'past', 'Paul', 'mine', 'blue', 'required', 'family', 'have', 'office',
                'currently', 'various', 'would', 'history', 'minimum', 'rate', 'center', 'took', 'application', 'he', 'saw', 'gets',
                'applications', 'car', 'low', 'hi', 'four', 'room', 'command', 'close', 'known', 'simple', 'mint', 'guy', 'yourself', 'lines',
                'Canada', 'knowledge', 'except', 'interesting', 'deal', 'return', 'they', 'further', 'sites', 'issues', 'ones', 'value',
                'Mike', 'sometimes', 'united', 'voice', 'star', 'error', 'worth', 'certain', 'air', 'whatever', 'friend', 'reply',
                'skills', 'resume', 'rules', 'move', 'field', 'title', 'York', 'cause', 'board', 'excellent', 'advance', 'sort', 'format',
                'quality', 'directory', 'America', 'members', 'rest', 'talking', 'consider', 'search', 'society', 'shipping', 'lost',
                'near', 'response', 'front', 'press', 'death', 'college', 'correct', 'face', 'action', 'sense', 'friends', 'sell', 'clear',
                'north', 'English', 'related', 'fast', 'hours', 'allow', 'comments', 'release', 'leave', 'trade', 'month', 'itself', 'hardware',
                'street', 'Steve', 'organism', 'early', 'fun', 'was', 'exactly', 'living', 'force', 'land', 'locus', 'view', 'color',
                'president', 'march', 'screen', 'difference', 'wish', 'particular', 'opinions', 'sun', 'main', 'performance', 'recently',
                'taken', 'programming', 'numbers', 'basic', 'create', 'longer', 'playing', 'writing', 'includes', 'dead', 'Robert',
                'management', 'certainly', 'act', 'what', 'radio', 'half', 'needed', 'takes', 'likely', 'learn', 'department', 'dark', 'hold',
                'looks', 'normal', 'happy', 'kill', 'environment', 'Al', 'auction', 'taking', 'specific', 'total', 'engineering', 'California',
                'lots', 'condition', 'finally', 'directly', 'weeks', 'sounds', 'included', 'ideas', 'strong', 'anybody', 'themselves', 'driver',
                'political', 'party', 'opinion', 'details', 'outside', 'previous', 'client', 'otherwise', 'die', 'mailing',
                'companies', 'receive', 'effect', 'result', 'age', 'model', 'young', 'knows', 'road', 'request', 'Peter', 'woman', 'parts',
                'south', 'James', 'happen', 'played', 'mode', 'apple', 'ram', 'sex', 'choice', 'results', 'individual', 'uses', 'names',
                'present', 'behind', 'win', 'pages', 'posts', 'child', 'according', 'looked', 'messages', 'are', 'articles', 'thinking',
                'hit', 'cover', 'shows', 'could', 'paper', 'bob', 'we', 'member', 'limited', 'inside', 'character', 'image', 'minutes',
                'Jim', 'wide', 'club', 'plan', 'clone', 'location', 'west', 'package', 'fire', 'five', 'save', 'legal', 'entire',
                'security', 'completely', 'art', 'commercial', 'across', 'evidence', 'tax', 'port', 'added', 'hell', 'record',
                'Dave', 'amount', 'average', 'resources', 'print', 'wait', 'earth', 'movie', 'tape', 'higher', 'recent', 'health',
                'account', 'February', 'wants', 'necessary', 'tools', 'players', 'magazine', 'received', 'anonymous',
                'appreciated', 'expect', 'among', 'shall', 'reference', 'song', 'manager', 'worked', 'food', 'electronic', 'prices',
                'situation', 'involved', 'material', 'base', 'areas', 'considered', 'chance', 'held', 'community', 'education', 'guys',
                'changes', 'training', 'male', 'energy', 'therefore', 'Washington', 'follow', 'private', 'letter',
                'player', 'range', 'social', 'vote', 'forward', 'eyes', 'term', 'hands', 'media', 'function', 'interface',
                'court', 'share', 'document', 'thread', 'bought', 'watch', 'industry', 'ability', 'communications', 'mentioned', 'happened',
                'claim', 'himself', 'knew', 'bring', 'figure', 'student', 'cases', 'sales', 'table', 'federal', 'additional', 'extra',
                'million', 'continue', 'serious', 'opportunity', 'students', 'willing', 'statement', 'respond', 'asking', 'created',
                'requirements', 'drivers', 'useful', 'welcome', 'window', 'direct', 'gives', 'master',
                'listed', 'brain', 'bids', 'door', 'period', 'starting', 'speak', 'folks', 'features', 'poor', 'author',
                'latest', 'offers', 'guide', 'store', 'medical', 'primates', 'connection', 'truth', 'film', 'appropriate',
                'king', 'difficult', 'object', 'suite', 'gave', 'easily', 'solution', 'characters', 'contains', 'suggestions', 'gone',
                'blood', 'wonder', 'conference', 'nature', 'equipment', 'orders', 'changed', 'ship', 'Scott', 'turned', 'alone',
                'study', 'lists', 'length', 'suggest', 'beta', 'provided', 'installed', 'felt',
                'generally', 'option', 'mention', 'appreciate'];
    totalLevel = this.allLevelQues.length / this.numberOfQues;
    accents = [
      {
        place: 'English (India)',
        value: 'hi-IN',
        show: 'Eng-Ind'
      },
      {
        place: 'English (US)',
        value: 'en-US',
        show: 'Eng-US'
      },
      {
        place: 'English (UK)',
        value: 'en-GB',
        show: 'Eng-UK'
      },
      {
        place: 'English (Australia)',
        value: 'en-Au',
        show: 'Eng-Au'
      },
      {
        place: 'English (Ireland)',
        value: 'en-IE',
        show: 'Eng-IE'
      },
      {
        place: 'Arabic',
        value: 'ar-SA',
        show: 'SA'
      }
    ];


  constructor() { }

  levelChanged(level): void {
    this.questionNumber = 0;
    this.selectedlevel = level;
    const startingPoint = this.numberOfQues * level;
    this.currentLevelQues = this.allLevelQues.slice(startingPoint, startingPoint + this.numberOfQues);
  }

  nextQuestion(): void {
    this.userInput.push(this.userWord);
    this.userWord = '';
    if (this.questionNumber === this.numberOfQues - 1) {
      let correctAns = 0;
      for (let i = 0; i < this.numberOfQues; i++) {
        if (this.currentLevelQues[i] === this.userInput[i]) {
          correctAns++;
        }
        this.correctPercetage = (correctAns * 100.0 / this.numberOfQues);
      }
      this.openModel();
    } else {
      this.questionNumber = this.questionNumber + 1;
      this.aloudQuestion();
    }
  }

  submit(): void {
    let correctAns = 0;
    for (let i = 0; i < this.questionNumber; i++) {
      if (this.currentLevelQues[i] === this.userInput[i]) {
        correctAns++;
      }
      this.correctPercetage = (correctAns * 100.0 / this.questionNumber);
    }
    this.openModel();
  }

  aloudQuestion(): void {
    const word = new SpeechSynthesisUtterance(this.currentLevelQues[this.questionNumber]);
    word.lang = this.selectedLang;
    word.volume = 1.0;
    window.speechSynthesis.speak(word);
  }

  enterName(): void {
    this.openNameModel();
  }

  startLevel(): void {
    this.inputRow = true;
    this.userInput = [];
    this.questionNumber = 0;
    this.aloudQuestion();
  }

  openModel(): void {
    $('#exampleModal').modal();
  }

  openNameModel(): void {
    $('#enterName').modal();
  }

  nextLevel(): void {
    this.levelChanged(this.selectedlevel + 1);
    $('#exampleModal').modal('hide');
  }

  changedLang(idx): void {
    this.selectedLangIndex = idx;
    this.selectedLang = this.accents[idx].value;
    this.aloudQuestion();
  }
}
