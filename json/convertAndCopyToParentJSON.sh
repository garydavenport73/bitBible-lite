for file in *.json;

do
    node convertJSONToJS.js $file
done

cp *.js ..
