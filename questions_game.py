questions = ['What breed of dog is Nelliana?', 'What band made the song that Scarlet is named after?', 'What is Devins middle name?', 'How cool is Rich?', 'What does Luna love the most?']

answers = ['Chihuahua', 'Grateful Dead', 'Lauren', 'Very Cool', 'Food']

def quizGame():
    score = 0
    for i in range(len(questions)):
        print(questions[i])
        userAnswer = input('please answer \n')
        if userAnswer == answers[i]:
            print('correct!')
            score += 1
        else:
            print('incorrect!');

    print(f'Final score: {score}')

quizGame()